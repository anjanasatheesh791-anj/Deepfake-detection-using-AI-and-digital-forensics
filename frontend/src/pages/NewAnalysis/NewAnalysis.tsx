import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Upload,
  FileVideo,
  X,
  ShieldCheck,
  Eye,
  Activity,
  ArrowRight,
  Check,
} from "lucide-react";

import eyeReflectionImage from "../../assets/eye-reflection.png";
import lipSyncImage from "../../assets/lip-sync.png";

const NewAnalysis = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (file?: File) => {
    if (!file) return;

    const isVideo =
      file.type.startsWith("video/") ||
      /\.(mp4|mov|avi|mkv|webm)$/i.test(file.name);

    if (!isVideo) {
      setError("Please select a valid video file.");
      setSelectedFile(null);
      return;
    }

    if (file.size > 500 * 1024 * 1024) {
      setError("File size must be less than 500 MB.");
      setSelectedFile(null);
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    handleFile(event.dataTransfer.files[0]);
  };

  const formatFileSize = (bytes: number) =>
    (bytes / (1024 * 1024)).toFixed(2) + " MB";

  const startAnalysis = () => {
    if (!selectedFile) return;

    navigate("/analysis-progress", {
      state: {
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
      },
    });
  };

  return (
    <div className="new-analysis-page">
      {/* PAGE HEADER */}
      <header className="na-header">
        <div>
          <div className="na-breadcrumb">
            WORKSPACE <span>/</span> NEW ANALYSIS
          </div>

          <h1>New Analysis</h1>

          <p>
            Upload digital media and examine it for signs of manipulation.
          </p>
        </div>

        <div className="na-security-status">
          <ShieldCheck size={17} />
          FORENSIC WORKSPACE
        </div>
      </header>

      {/* UPLOAD SECTION */}
      <section className="na-section">
        <div className="na-section-heading">
          <div>
            <span className="na-overline">STEP 01</span>
            <h2>Upload your video</h2>
            <p>Select a video file to begin forensic examination.</p>
          </div>

          <span className="na-size-limit">MAX 500 MB</span>
        </div>

        <div
          className={`na-upload-zone ${isDragging ? "is-dragging" : ""} ${
            selectedFile ? "has-file" : ""
          }`}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*,.mp4,.mov,.avi,.mkv,.webm"
            hidden
            onChange={(event) => {
              handleFile(event.target.files?.[0]);
              event.target.value = "";
            }}
          />

          <div className="na-upload-visual">
            <div className="na-upload-glow" />
            <Upload size={30} />
          </div>

          <h3>
            {selectedFile ? "Replace your video" : "Drop your video here"}
          </h3>

          <p>
            Drag and drop your file or{" "}
            <span>browse your device</span>
          </p>

          <div className="na-format-list">
            <span>MP4</span>
            <span>MOV</span>
            <span>AVI</span>
            <span>MKV</span>
            <span>WEBM</span>
          </div>

          <div className="na-upload-footer">
            <ShieldCheck size={14} />
            Your selected file will be used for this analysis
          </div>
        </div>

        {error && <div className="na-error">{error}</div>}

        {selectedFile && (
          <div className="na-file-card">
            <div className="na-file-icon">
              <FileVideo size={24} />
            </div>

            <div className="na-file-details">
              <strong>{selectedFile.name}</strong>
              <span>
                {formatFileSize(selectedFile.size)} · Video selected
              </span>
            </div>

            <span className="na-file-ready">
              <Check size={15} />
              Ready
            </span>

            <button
              className="na-remove-file"
              aria-label="Remove selected video"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedFile(null);
                setError("");
              }}
            >
              <X size={18} />
            </button>
          </div>
        )}
      </section>

      {/* DETECTION METHODS */}
      <section className="na-section na-methods-section">
        <div className="na-section-heading">
          <div>
            <span className="na-overline">STEP 02</span>
            <h2>Detection methods</h2>
            <p>
              Two independent forensic approaches will examine the video.
            </p>
          </div>

          <div className="na-method-count">
            <span className="na-count-dot" />
            02 METHODS ACTIVE
          </div>
        </div>

        <div className="na-method-grid">
          {/* EYE REFLECTION CARD */}
          <article className="na-method-card eye-card">
            <div className="na-card-top">
              <div className="na-method-icon eye-method-icon">
                <Eye size={25} />
              </div>

              <span className="na-active-tag">
                <span /> ACTIVE
              </span>
            </div>

            <div className="na-visual eye-visual image-visual">
              <img
                src={eyeReflectionImage}
                alt="Eye reflection forensic analysis visualization"
              />

              <div className="image-visual-overlay" />

              <span className="visual-coordinate">
                REFLECTION SCAN · 01
              </span>
            </div>

            <div className="na-method-content">
              <span className="na-method-number">
                MODULE 01 · VISUAL FORENSICS
              </span>

              <h3>Eye Reflection Analysis</h3>

              <p>
                Examines the consistency of light reflections in the eyes
                to identify possible visual manipulation.
              </p>

              <div className="na-feature-list">
                <span>
                  <Check size={14} /> Eye region examination
                </span>
                <span>
                  <Check size={14} /> Reflection consistency
                </span>
              </div>
            </div>

            <div className="na-card-bottom">
              <span>VISUAL INTEGRITY</span>
              <Eye size={17} />
            </div>
          </article>

          {/* LIP SYNC CARD */}
          <article className="na-method-card lipsync-card">
            <div className="na-card-top">
              <div className="na-method-icon audio-method-icon">
                <Activity size={25} />
              </div>

              <span className="na-active-tag">
                <span /> ACTIVE
              </span>
            </div>

            <div className="na-visual audio-visual image-visual">
              <img
                src={lipSyncImage}
                alt="Lip synchronization forensic analysis visualization"
              />

              <div className="image-visual-overlay" />

              <span className="visual-coordinate">
                AUDIO-VISUAL SYNC · 02
              </span>
            </div>

            <div className="na-method-content">
              <span className="na-method-number">
                MODULE 02 · AUDIO-VISUAL FORENSICS
              </span>

              <h3>Lip-Sync Detection</h3>

              <p>
                Compares mouth movements with the audio track to identify
                mismatches in speech synchronization.
              </p>

              <div className="na-feature-list">
                <span>
                  <Check size={14} /> Facial movement analysis
                </span>
                <span>
                  <Check size={14} /> Audio synchronization
                </span>
              </div>
            </div>

            <div className="na-card-bottom">
              <span>AUDIO-VISUAL CONSISTENCY</span>
              <Activity size={17} />
            </div>
          </article>
        </div>
      </section>

      {/* INFORMATION */}
      <div className="na-info-panel">
        <div className="na-info-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <strong>Multi-layer forensic examination</strong>
          <p>
            Both modules are included in the planned analysis workflow.
            Actual AI processing will be connected during backend development.
          </p>
        </div>
      </div>

      {/* ACTION */}
      <div className="na-action-area">
        <div className="na-action-hint">
          {selectedFile
            ? "Your video is ready for examination."
            : "Select a video file to continue."}
        </div>

        <button
          className="na-start-button"
          disabled={!selectedFile}
          onClick={startAnalysis}
        >
          Start Forensic Analysis
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default NewAnalysis;