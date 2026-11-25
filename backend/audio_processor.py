
import os
import uuid
import av


def extract_audio(
    video_path: str,
    output_dir: str
):
    """
    Extract the audio track from an uploaded video
    and save it as a WAV file.
    """

    os.makedirs(output_dir, exist_ok=True)

    audio_filename = f"audio_{uuid.uuid4().hex}.wav"

    audio_path = os.path.join(
        output_dir,
        audio_filename
    )

    container = None
    output_container = None

    try:
        container = av.open(video_path)

        audio_streams = [
            stream
            for stream in container.streams
            if stream.type == "audio"
        ]

        if not audio_streams:
            raise ValueError(
                "No audio track found in the uploaded video."
            )

        audio_stream = audio_streams[0]

        output_container = av.open(
            audio_path,
            mode="w"
        )

        output_stream = output_container.add_stream(
            "pcm_s16le",
            rate=44100
        )

        output_stream.layout = "mono"

        extracted_samples = 0

        for frame in container.decode(audio_stream):
            frame.pts = None

            for packet in output_stream.encode(frame):
                output_container.mux(packet)

            extracted_samples += frame.samples

        for packet in output_stream.encode(None):
            output_container.mux(packet)

        if extracted_samples == 0:
            raise ValueError(
                "Unable to extract audio from the video."
            )

        duration = extracted_samples / 44100

        return {
            "audio_filename": audio_filename,
            "audio_path": audio_path,
            "duration_seconds": round(duration, 2),
            "sample_rate": 44100,
            "channels": 1,
            "format": "WAV"
        }

    except Exception:
        if os.path.exists(audio_path):
            os.remove(audio_path)
        raise

    finally:
        if output_container is not None:
            output_container.close()

        if container is not None:
            container.close()
