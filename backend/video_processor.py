
import cv2
import os


def extract_frames(
    video_path: str,
    output_dir: str,
    sample_rate: int = 1
):
    """
    Extract frames from a video at a fixed frame interval.

    sample_rate = 1 means every frame.
    sample_rate = 5 means every 5th frame.
    """

    if sample_rate < 1:
        raise ValueError("Sample rate must be at least 1.")

    os.makedirs(output_dir, exist_ok=True)

    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        raise ValueError("Unable to open video for frame extraction.")

    fps = cap.get(cv2.CAP_PROP_FPS)

    if fps <= 0:
        cap.release()
        raise ValueError("Unable to determine video FPS.")

    frame_number = 0
    extracted_count = 0
    frame_timestamps = []

    try:
        while True:
            success, frame = cap.read()

            if not success:
                break

            if frame_number % sample_rate == 0:

                frame_filename = f"frame_{extracted_count:06d}.jpg"

                frame_path = os.path.join(
                    output_dir,
                    frame_filename
                )

                print("OUTPUT DIRECTORY:", os.path.abspath(output_dir))
                print("FRAME PATH:", os.path.abspath(frame_path))
                print("DIRECTORY EXISTS:", os.path.isdir(output_dir))
                print("DIRECTORY WRITABLE:", os.access(output_dir, os.W_OK))
                print("FRAME SHAPE:", frame.shape)

                write_success = cv2.imwrite(frame_path, frame)

                if not write_success:
                    raise ValueError(
                        f"Unable to save extracted frame: {frame_filename}. "
                        f"Output path: {os.path.abspath(frame_path)}"
                    )

                timestamp = frame_number / fps

                frame_timestamps.append({
                    "frame_number": frame_number,
                    "timestamp_seconds": round(timestamp, 3),
                    "filename": frame_filename
                })

                extracted_count += 1

            frame_number += 1

    finally:
        cap.release()

    return {
        "total_frames": frame_number,
        "extracted_frames": extracted_count,
        "fps": round(fps, 2),
        "frames": frame_timestamps
    }
