import {
  ArrowLeft,
  ArrowDownToLine,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Eye,
  AudioLines,
  FileVideo,
  FileText,
  Clock3,
  Fingerprint,
  Activity,
  CheckCircle2,
  XCircle,
  Info,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./results.css";

const Results = () => {
  const location = useLocation();

  // File details passed from the analysis workflow, if available.
  const fileName =
    location.state?.fileName || "sample_video_analysis.mp4";

  const verdict = "FAKE";
  const confidence = 94.6;

  return (
    <div className="results-page">
      {/* HEADER */}
      <header className="results-header">
        <div>
          <Link to="/analysis-progress" className="results-back">
            <ArrowLeft size={16} />
            Back to analysis
          </Link>

          <div className="results-eyebrow">
            DIGITAL FORENSICS / ANALYSIS RESULTS
          </div>

          <h1>Analysis Results</h1>
          <p className="results-subtitle">
            Review the detection outcome and forensic evidence collected
            from the submitted video.
          </p>
        </div>

        <div className="results-header-actions">
          <span className="results-demo-label">
            <span /> SAMPLE RESULT
          </span>
          <button
            className="results-download-button"
            onClick={() =>
              window.alert("Forensic report download will be connected later.")
            }
          >
            <ArrowDownToLine size={16} />
            Export Report
          </button>
        </div>
      </header>

      {/* FILE INFORMATION */}
      <section className="results-file-bar">
        <div className="results-file-icon">
          <FileVideo size={21} />
        </div>

        <div className="results-file-details">
          <span className="results-small-label">ANALYSED VIDEO</span>
          <strong>{fileName}</strong>
        </div>

        <div className="results-file-meta">
          <span><Clock3 size={14} /> Analysis completed</span>
          <strong>Sample workflow</strong>
        </div>

        <div className="results-file-meta">
          <span><Fingerprint size={14} /> Analysis ID</span>
          <strong>DF-2026-00128</strong>
        </div>
      </section>

      {/* VERDICT */}
      <section className="verdict-card">
        <div className="verdict-main">
          <div className="verdict-icon">
            <ShieldAlert size={27} />
          </div>

          <div>
            <span className="results-small-label">OVERALL DETECTION VERDICT</span>
            <h2>{verdict} VIDEO DETECTED</h2>
            <p>
              Multiple inconsistencies were identified across the
              analysed forensic signals.
            </p>
          </div>
        </div>

        <div className="verdict-confidence">
          <span className="results-small-label">DETECTION CONFIDENCE</span>
          <div className="confidence-number">
            {confidence}<small>%</small>
          </div>
          <div className="confidence-track">
            <div style={{ width: `${confidence}%` }} />
          </div>
          <span className="confidence-caption">
            Sample confidence score
          </span>
        </div>
      </section>

      {/* DETECTION MODULES */}
      <section className="results-section">
        <div className="results-section-heading">
          <div>
            <span className="results-eyebrow">FORENSIC EXAMINATION</span>
            <h2>Detection Module Analysis</h2>
          </div>
          <span className="results-section-count">02 MODULES</span>
        </div>

        <div className="results-module-grid">
          {/* EYE REFLECTION */}
          <article className="results-module-card">
            <div className="results-module-top">
              <div className="results-module-icon eye-module-icon">
                <Eye size={20} />
              </div>
              <span className="module-status warning-status">
                <AlertTriangle size={13} />
                Anomaly detected
              </span>
            </div>

            <h3>Eye Reflection Analysis</h3>
            <p className="results-module-description">
              Examines reflection patterns in both eyes to identify
              visual inconsistencies.
            </p>

            <div className="module-score-row">
              <span>Reflection consistency</span>
              <strong>32%</strong>
            </div>

            <div className="module-score-track">
              <div className="eye-score-fill" style={{ width: "32%" }} />
            </div>

            <div className="module-finding">
              <AlertTriangle size={15} />
              <div>
                <strong>Inconsistent reflections</strong>
                <span>
                  Differences detected between left and right eye
                  reflection patterns.
                </span>
              </div>
            </div>

            <div className="module-footer">
              <span>MODULE 01</span>
              <span>Sample analysis</span>
            </div>
          </article>

          {/* LIP SYNC */}
          <article className="results-module-card">
            <div className="results-module-top">
              <div className="results-module-icon audio-module-icon">
                <AudioLines size={20} />
              </div>
              <span className="module-status warning-status">
                <AlertTriangle size={13} />
                Mismatch detected
              </span>
            </div>

            <h3>Lip-Sync Detection</h3>
            <p className="results-module-description">
              Evaluates synchronization between mouth movements and
              the corresponding audio signal.
            </p>

            <div className="module-score-row">
              <span>Audio-visual synchronization</span>
              <strong>24%</strong>
            </div>

            <div className="module-score-track">
              <div className="lip-score-fill" style={{ width: "24%" }} />
            </div>

            <div className="module-finding">
              <AlertTriangle size={15} />
              <div>
                <strong>Synchronization mismatch</strong>
                <span>
                  Sample analysis indicates inconsistencies between
                  speech audio and mouth movement.
                </span>
              </div>
            </div>

            <div className="module-footer">
              <span>MODULE 02</span>
              <span>Sample analysis</span>
            </div>
          </article>
        </div>
      </section>

      {/* EVIDENCE SUMMARY */}
      <section className="evidence-panel">
        <div className="results-section-heading">
          <div>
            <span className="results-eyebrow">EXPLAINABLE OUTPUT</span>
            <h2>Forensic Evidence Summary</h2>
          </div>
          <Activity size={20} className="evidence-heading-icon" />
        </div>

        <div className="evidence-list">
          <div className="evidence-row">
            <div className="evidence-row-icon warning-evidence">
              <Eye size={17} />
            </div>
            <div className="evidence-row-content">
              <strong>Eye reflection inconsistency</strong>
              <span>
                Reflection patterns show differences between the
                detected eye regions.
              </span>
            </div>
            <span className="evidence-result warning-text">ANOMALY</span>
          </div>

          <div className="evidence-row">
            <div className="evidence-row-icon warning-evidence">
              <AudioLines size={17} />
            </div>
            <div className="evidence-row-content">
              <strong>Audio-visual mismatch</strong>
              <span>
                The estimated relationship between audio and lip
                movement indicates a synchronization issue.
              </span>
            </div>
            <span className="evidence-result warning-text">ANOMALY</span>
          </div>

          <div className="evidence-row">
            <div className="evidence-row-icon neutral-evidence">
              <FileVideo size={17} />
            </div>
            <div className="evidence-row-content">
              <strong>Video integrity assessment</strong>
              <span>
                Detailed file integrity and compression checks will
                be available after backend integration.
              </span>
            </div>
            <span className="evidence-result neutral-text">PENDING</span>
          </div>
        </div>
      </section>

      {/* REPORT PREVIEW */}
      <section className="results-report-card">
        <div className="report-icon">
          <FileText size={22} />
        </div>

        <div className="report-copy">
          <h3>Detailed Forensic Report</h3>
          <p>
            A structured report containing detection findings,
            evidence scores, and analysis details.
          </p>
        </div>

        <button
          className="report-action"
          onClick={() =>
            window.alert("Report generation will be connected later.")
          }
        >
          <FileText size={16} />
          View Report
        </button>
      </section>

      {/* DISCLAIMER */}
      <div className="results-disclaimer">
        <Info size={16} />
        <p>
          This is a sample interface using placeholder values.
          Actual detection results, confidence scores, and forensic
          evidence will be generated by the integrated AI models.
        </p>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="results-bottom-actions">
        <Link to="/new-analysis" className="results-new-analysis">
          Start New Analysis
        </Link>
        <Link to="/" className="results-dashboard-link">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Results;
