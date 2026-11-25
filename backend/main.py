
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import cv2
import os
import shutil
import uuid
import av
from video_processor import extract_frames
from audio_processor import extract_audio

app = FastAPI(title="Deepfake Detection API")

# Allow communication with the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
MAX_FILE_SIZE = 500 * 1024 * 1024  # 500 MB

os.makedirs(UPLOAD_DIR, exist_ok=True)

ALLOWED_EXTENSIONS = {
    ".mp4", ".mov", ".avi", ".mkv", ".webm"
}


@app.get("/")
def root():
    return {"message": "Deepfake Detection Backend is running!"}


@app.post("/upload-video")
async def upload_video(file: UploadFile = File(...)):

    # Check file extension
    extension = os.path.splitext(file.filename or "")[1].lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Unsupported video format."
        )

    # Generate a unique filename
    saved_filename = f"{uuid.uuid4().hex}{extension}"
    file_path = os.path.join(UPLOAD_DIR, saved_filename)

    file_size = 0

    try:
        # Save video in chunks and enforce size limit
        with open(file_path, "wb") as buffer:
            while True:
                chunk = await file.read(1024 * 1024)

                if not chunk:
                    break

                file_size += len(chunk)

                if file_size > MAX_FILE_SIZE:
                    raise HTTPException(
                        status_code=413,
                        detail="Video exceeds the 500 MB limit."
                    )

                buffer.write(chunk)

        if file_size == 0:
            raise HTTPException(
                status_code=400,
                detail="Uploaded file is empty."
            )

        # Check whether OpenCV can read the video
        cap = cv2.VideoCapture(file_path)

        if not cap.isOpened():
            raise HTTPException(
                status_code=400,
                detail="Uploaded file is not a readable video."
            )

        fps = cap.get(cv2.CAP_PROP_FPS)
        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

        cap.release()

        if fps <= 0 or frame_count <= 0 or width <= 0 or height <= 0:
            raise HTTPException(
                status_code=400,
                detail="Unable to read valid video metadata."
            )

        duration = frame_count / fps

        # Detect whether the video contains an audio track
        container = av.open(file_path)

        has_audio = any(
            stream.type == "audio"
            for stream in container.streams
        )

        container.close()

        return {
           
    "message": "Video uploaded and validated successfully.",
    "filename": file.filename,
    "saved_filename": saved_filename,
            "file_size_mb": round(file_size / (1024 * 1024), 2),
            "video_metadata": {
                "duration_seconds": round(duration, 2),
                "fps": round(fps, 2),
                "frame_count": frame_count,
                "resolution": f"{width}x{height}",
                "has_audio": has_audio
            }
        }

    except Exception as error:
        # Remove incomplete or rejected uploads
        if os.path.exists(file_path):
            os.remove(file_path)

        if isinstance(error, HTTPException):
            raise error

        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing the upload."
        )

    finally:
        await file.close()


@app.post("/process-video")
async def process_video(saved_filename: str):
    video_path = os.path.join(UPLOAD_DIR, saved_filename)

    if not os.path.exists(video_path):
        raise HTTPException(
            status_code=404,
            detail="Uploaded video was not found."
        )

    processing_id = uuid.uuid4().hex
    PROCESSED_DIR = r"C:\deepfake_processed"

    processing_dir = os.path.join(
        PROCESSED_DIR,
        processing_id
    )

    frames_dir = os.path.join(
        processing_dir,
        "frames"
    )

    audio_dir = os.path.join(
        processing_dir,
        "audio"
    )

    try:
        # Step 1: Extract video frames
        frame_result = extract_frames(
            video_path=video_path,
            output_dir=frames_dir,
            sample_rate=5
        )

        # Step 2: Extract audio
        audio_result = extract_audio(
            video_path=video_path,
            output_dir=audio_dir
        )

        return {
            "message": "Video and audio processing completed successfully.",
            "processing_id": processing_id,
            "saved_filename": saved_filename,

            "frame_extraction": {
                "total_frames": frame_result["total_frames"],
                "extracted_frames": frame_result["extracted_frames"],
                "fps": frame_result["fps"]
            },

            "audio_extraction": {
                "audio_filename": audio_result["audio_filename"],
                "duration_seconds": audio_result["duration_seconds"],
                "sample_rate": audio_result["sample_rate"],
                "channels": audio_result["channels"],
                "format": audio_result["format"]
            }
        }

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error)
        )

    except Exception as error:
        print("VIDEO PROCESSING ERROR:", repr(error))

        raise HTTPException(
            status_code=500,
            detail=f"Video processing failed: {str(error)}"
        )
