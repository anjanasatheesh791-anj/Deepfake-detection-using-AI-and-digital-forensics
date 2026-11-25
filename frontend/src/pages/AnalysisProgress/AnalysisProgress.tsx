import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  AudioLines,
  CheckCircle2,
  Circle,
  Clock3,
  Eye,
  FileSearch,
  FileText,
  FileVideo,
  GitMerge,
  Info,
  LoaderCircle,
  ScanFace,
  ShieldCheck,
} from "lucide-react";

const AnalysisProgress = () => {
  const location = useLocation();

  const fileName = location.state?.fileName || "Demo video";
  const fileSize = location.state?.fileSize;
  const uploadResult = location.state?.uploadResult;
  console.log("UPLOAD RESULT:", uploadResult);
const videoMetadata = uploadResult?.video_metadata;

const savedFilename = uploadResult?.saved_filename;

const processStarted = useRef(false);

const [processingResult, setProcessingResult] = useState<any>(null);
const [processingError, setProcessingError] = useState("");
const [isProcessing, setIsProcessing] = useState(false);

useEffect(() => {
  if (!savedFilename || processStarted.current) return;

  processStarted.current = true;

  const processVideo = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/process-video?saved_filename=${encodeURIComponent(savedFilename)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.detail || "Video processing failed."
        );
      }

      console.log("VIDEO PROCESSING RESULT:", result);

      setProcessingResult(result);

    } catch (error) {
      console.error("Video processing error:", error);

      setProcessingError(
        error instanceof Error
          ? error.message
          : "Something went wrong during processing."
      );

    } finally {
      setIsProcessing(false);
    }
  };

  processVideo();

}, [savedFilename]);

  const stages = [
    {
      number: "01",
      title: "Video Upload & Validation",
      description: "Checking the uploaded video and file properties.",
      status: "completed",
      icon: FileVideo,
    },
    {
      number: "02",
      title: "Frame Extraction",
      description: "Preparing video frames for forensic examination.",
      status: "completed",
      icon: Activity,
    },
    {
      number: "03",
      title: "Face Detection & Landmarks",
      description: "Locating faces and extracting facial landmarks.",
      status: "pending",
      icon: ScanFace,
    },
    {
      number: "04",
      title: "Eye Reflection Analysis",
      description: "Examining reflection and lighting consistency.",
      status: "pending",
      icon: Eye,
    },
    {
      number: "05",
      title: "Lip-Sync Detection",
      description: "Evaluating audio and mouth synchronization.",
      status: "pending",
      icon: AudioLines,
    },
    {
      number: "06",
      title: "Evidence Fusion",
      description: "Combining available forensic indicators.",
      status: "pending",
      icon: GitMerge,
    },
    {
      number: "07",
      title: "Forensic Report Generation",
      description: "Preparing the final examination report.",
      status: "pending",
      icon: FileText,
    },
  ];

  const completedStages = stages.filter(
    (stage) => stage.status === "completed"
  ).length;

  const progress = 29;

  const formattedSize =
    typeof fileSize === "number"
      ? `${(fileSize / (1024 * 1024)).toFixed(2)} MB`
      : "Not available";

  return (
    <div className="progress-page">
      {/* PAGE HEADER */}
      <header className="progress-header">
        <div>
          <Link to="/new-analysis" className="progress-back">
            <ArrowLeft size={15} />
            Back to upload
          </Link>

          <p className="progress-eyebrow">
            DIGITAL FORENSICS / ANALYSIS WORKSPACE
          </p>

          <h1>Forensic Analysis</h1>

          <p className="progress-subtitle">
            Examination workflow and processing overview
          </p>
        </div>

        <div className="progress-live-badge">
          <span className="live-dot"></span>
          VIDEO PROCESSING WORKFLOW
        </div>
      </header>

      {/* FILE SUMMARY */}
      <section className="analysis-file-panel">
        <div className="analysis-file-icon">
          <FileVideo size={25} />
        </div>

        <div className="analysis-file-details">
          <span className="panel-label">SOURCE VIDEO</span>
          <h2 title={fileName}>{fileName}</h2>
          <p>Uploaded media · {formattedSize}</p>

{videoMetadata && (
  <div className="video-metadata">
    <p><strong>Duration:</strong> {videoMetadata.duration_seconds} seconds</p>
    <p><strong>Frame Rate:</strong> {videoMetadata.fps} FPS</p>
    <p><strong>Resolution:</strong> {videoMetadata.resolution}</p>
    <p><strong>Total Frames:</strong> {videoMetadata.frame_count}</p>
    <p><strong>Audio:</strong> {videoMetadata.has_audio ? "Available" : "Not available"}</p>
  </div>
)}
        </div>

        <div className="file-verified">
          <ShieldCheck size={17} />
          <span>FILE SELECTED</span>
        </div>
      </section>

            {/* ACTUAL VIDEO PROCESSING RESULTS */}
      <section className="analysis-file-panel">
        <div className="analysis-file-details">
          <h2>Video Processing Results</h2>

          {isProcessing && (
            <p>Extracting video frames and audio...</p>
          )}

          {processingError && (
            <p style={{ color: "red" }}>
              Processing failed: {processingError}
            </p>
          )}

          {processingResult && (
            <div className="video-metadata">
              <p>
                <strong>Status:</strong> Processing Successful
              </p>

              <p>
                <strong>Processing ID:</strong>{" "}
                {processingResult.processing_id}
              </p>

              <p>
                <strong>Extracted Frames:</strong>{" "}
                {processingResult.frame_extraction.extracted_frames}
              </p>

              <p>
                <strong>Total Frames:</strong>{" "}
                {processingResult.frame_extraction.total_frames}
              </p>

              <p>
                <strong>FPS:</strong>{" "}
                {processingResult.frame_extraction.fps}
              </p>

              <p>
                <strong>Audio File:</strong>{" "}
                {processingResult.audio_extraction.audio_filename}
              </p>

              <p>
                <strong>Audio Duration:</strong>{" "}
                {processingResult.audio_extraction.duration_seconds} seconds
              </p>

              <p>
                <strong>Audio Format:</strong>{" "}
                {processingResult.audio_extraction.format}
              </p>

              <p>
                <strong>Sample Rate:</strong>{" "}
                {processingResult.audio_extraction.sample_rate} Hz
              </p>
            </div>
          )}
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="progress-main-grid">
        {/* LEFT: ANALYSIS PIPELINE */}
        <section className="pipeline-panel">
          <div className="panel-heading">
            <div>
              <span className="panel-label">PROCESSING PIPELINE</span>
              <h2>Analysis Stages</h2>
              <p>Seven stages in the forensic examination</p>
            </div>

            <div className="pipeline-counter">
              {completedStages.toString().padStart(2, "0")}
              <span>/ 07</span>
            </div>
          </div>

          <div className="pipeline-list">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div
                  className={`pipeline-stage ${stage.status}`}
                  key={stage.number}
                >
                  <div className="pipeline-number">{stage.number}</div>

                  <div className={`pipeline-icon ${stage.status}`}>
                    <Icon size={19} />
                  </div>

                  <div className="pipeline-details">
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>

                  <div className={`pipeline-status ${stage.status}`}>
                    {stage.status === "completed" && (
                      <>
                        <CheckCircle2 size={15} />
                        <span>Complete</span>
                      </>
                    )}

                    {stage.status === "processing" && (
                      <>
                        <LoaderCircle size={15} />
                        <span>Active</span>
                      </>
                    )}

                    {stage.status === "pending" && (
                      <>
                        <Circle size={14} />
                        <span>Pending</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RIGHT: PROGRESS SUMMARY */}
        <aside className="progress-side-column">
          <section className="completion-panel">
            <div className="completion-top">
              <div>
                <span className="panel-label">OVERALL PROGRESS</span>
                <h2>Examination Status</h2>
              </div>

              <div className="completion-icon">
                <Activity size={19} />
              </div>
            </div>

            <div className="progress-number">
              {progress}<span>%</span>
            </div>

            <div className="main-progress-track">
              <div
                className="main-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="progress-range">
              <span>STARTED</span>
              <span>IN PROGRESS</span>
            </div>

            <div className="completion-divider"></div>

            <div className="progress-metric">
              <div>
                <CheckCircle2 size={15} />
                Completed stages
              </div>
              <strong>{completedStages} / 7</strong>
            </div>

            <div className="progress-metric">
              <div>
                <LoaderCircle size={15} />
                Current stage
              </div>
              <strong>Not started</strong>
            </div>

            <div className="progress-metric">
              <div>
                <Clock3 size={15} />
                Estimated time
              </div>
              <strong>--</strong>
            </div>
          </section>

          <section className="detection-panel">
            <span className="panel-label">CORE DETECTION MODULES</span>
            <h2>Forensic Examination</h2>

            <div className="detection-module">
              <div className="detection-icon blue">
                <Eye size={19} />
              </div>

              <div>
                <h3>Eye Reflection</h3>
                <p>Visual consistency examination</p>
              </div>

              <span className="module-pending">QUEUED</span>
            </div>

            <div className="detection-module">
              <div className="detection-icon violet">
                <AudioLines size={19} />
              </div>

              <div>
                <h3>Lip-Sync Analysis</h3>
                <p>Audio-visual synchronization</p>
              </div>

              <span className="module-pending">QUEUED</span>
            </div>
          </section>

          <section className="report-preview-panel">
            <div className="report-preview-icon">
              <FileSearch size={21} />
            </div>

            <div>
              <h3>Forensic Report</h3>
              <p>Available after examination is complete.</p>
            </div>

            <ArrowUpRight size={17} />
          </section>
        </aside>
      </div>

      {/* DEMO NOTICE */}
      <div className="progress-disclaimer">
        <Info size={18} />

        <div>
          <strong>Demonstration mode</strong>
          <p>
            <p>
  Video upload, validation, frame extraction and audio extraction
  are connected to the Python backend. Further forensic detection
  stages are awaiting implementation.
</p>
          </p>
        </div>
      </div>

      {/* RESULTS NAVIGATION */}
      <div className="progress-results-action">
        <div>
          <strong>Want to see the result screen?</strong>
          <p>Open the sample forensic findings for this video.</p>
        </div>

        <Link
          to="/results"
          state={{ fileName, fileSize }}
          className="progress-results-button"
        >
          View Sample Results
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default AnalysisProgress;
