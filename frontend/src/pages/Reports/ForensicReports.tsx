import {
  FileText,
  Download,
  ShieldCheck,
  ScanEye,
  AudioLines,
  Fingerprint,
  CalendarDays,
  HardDrive,
  FileCheck2,
  AlertTriangle,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./reports.css";

const reports = [
  {
    id: "RPT-2026-001",
    name: "interview_recording.mp4",
    date: "22 Nov 2026",
    verdict: "FAKE",
    confidence: "94.6%",
  },
  {
    id: "RPT-2026-002",
    name: "meeting_video.mp4",
    date: "21 Nov 2026",
    verdict: "REAL",
    confidence: "97.2%",
  },
  {
    id: "RPT-2026-003",
    name: "social_media_clip.mp4",
    date: "20 Nov 2026",
    verdict: "INCONCLUSIVE",
    confidence: "61.3%",
  },
];

const ForensicReports = () => {
  return (
    <div className="reports-page">

      {/* PAGE HEADER */}

      <header className="reports-header">
        <div>
          <span className="reports-eyebrow">
            DIGITAL FORENSICS / REPORT CENTER
          </span>
          <h1>Forensic Report Center</h1>
          <p>
            Detailed investigation findings, evidence and digital integrity records.
          </p>
        </div>

        <Link to="/history" className="reports-history-button">
          <Clock3 size={16} />
          View History
        </Link>
      </header>

      {/* FEATURED REPORT */}

      <section className="featured-report">

        <div className="featured-report-top">
          <div className="featured-report-label">
            <FileCheck2 size={16} />
            LATEST INVESTIGATION REPORT
          </div>

          <span className="report-generated-tag">
            SAMPLE REPORT
          </span>
        </div>

        <div className="featured-report-main">

          <div className="featured-report-details">
            <span className="report-id">REPORT ID / RPT-2026-001</span>

            <h2>interview_recording.mp4</h2>

            <p>
              Forensic examination of the uploaded video using
              eye reflection analysis and audio-visual lip synchronization.
            </p>

            <div className="featured-meta">
              <span>
                <CalendarDays size={14} />
                22 November 2026
              </span>

              <span>
                <HardDrive size={14} />
                MP4 Video
              </span>
            </div>
          </div>

          <div className="featured-verdict">
            <span>FINAL ASSESSMENT</span>

            <div className="verdict-indicator">
              <AlertTriangle size={22} />
            </div>

            <h3>FAKE VIDEO</h3>

            <strong>94.6%</strong>
            <small>Sample confidence score</small>
          </div>

        </div>

        <div className="featured-report-footer">
          <span>
            <ShieldCheck size={15} />
            Forensic assessment summary
          </span>

          <Link
            to="/results"
            state={{ fileName: "interview_recording.mp4" }}
            className="open-full-report"
          >
            Open Full Report
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </section>

      {/* EVIDENCE ANALYSIS */}

      <section className="evidence-section">

        <div className="reports-section-heading">
          <div>
            <span className="reports-eyebrow">INVESTIGATION FINDINGS</span>
            <h2>Evidence Breakdown</h2>
            <p>Summary of the two primary forensic detection modules.</p>
          </div>

          <span className="evidence-count">02 MODULES</span>
        </div>

        <div className="evidence-grid">

          {/* EYE REFLECTION */}

          <div className="evidence-card">

            <div className="evidence-card-top">
              <div className="evidence-icon eye">
                <ScanEye size={21} />
              </div>

              <span className="evidence-warning">
                ANOMALY FOUND
              </span>
            </div>

            <h3>Eye Reflection Analysis</h3>

            <p>
              Examines reflection consistency across the eye regions
              to identify possible visual manipulation.
            </p>

            <div className="evidence-score">
              <div>
                <span>Reflection consistency</span>
                <strong>32%</strong>
              </div>

              <div className="evidence-progress">
                <span style={{ width: "32%" }} />
              </div>
            </div>

            <div className="evidence-result">
              <AlertTriangle size={15} />
              Inconsistent reflection patterns detected
            </div>

          </div>

          {/* LIP SYNC */}

          <div className="evidence-card">

            <div className="evidence-card-top">
              <div className="evidence-icon audio">
                <AudioLines size={21} />
              </div>

              <span className="evidence-warning">
                ANOMALY FOUND
              </span>
            </div>

            <h3>Lip-Sync Detection</h3>

            <p>
              Examines synchronization between mouth movements
              and the corresponding audio signal.
            </p>

            <div className="evidence-score">
              <div>
                <span>Audio-visual synchronization</span>
                <strong>24%</strong>
              </div>

              <div className="evidence-progress">
                <span style={{ width: "24%" }} />
              </div>
            </div>

            <div className="evidence-result">
              <AlertTriangle size={15} />
              Audio and mouth movement mismatch detected
            </div>

          </div>

        </div>

      </section>

      {/* DIGITAL INTEGRITY */}

      <section className="integrity-section">

        <div className="reports-section-heading">
          <div>
            <span className="reports-eyebrow">SOURCE VERIFICATION</span>
            <h2>Digital Evidence Integrity</h2>
            <p>File information and planned forensic verification records.</p>
          </div>
        </div>

        <div className="integrity-grid">

          <div className="integrity-item">
            <div className="integrity-icon">
              <FileVideoIcon />
            </div>
            <div>
              <span>Source File</span>
              <strong>interview_recording.mp4</strong>
            </div>
          </div>

          <div className="integrity-item">
            <div className="integrity-icon">
              <HardDrive size={18} />
            </div>
            <div>
              <span>File Format</span>
              <strong>MP4 / Video</strong>
            </div>
          </div>

          <div className="integrity-item">
            <div className="integrity-icon">
              <Fingerprint size={18} />
            </div>
            <div>
              <span>File Hash</span>
              <strong>Pending SHA-256</strong>
            </div>
          </div>

          <div className="integrity-item">
            <div className="integrity-icon">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span>Integrity Verification</span>
              <strong>Backend integration pending</strong>
            </div>
          </div>

        </div>

        <div className="integrity-notice">
          <AlertTriangle size={15} />
          <span>
            Hash generation and file integrity verification are planned
            backend features. No actual integrity check has been performed.
          </span>
        </div>

      </section>

      {/* REPORT ARCHIVE */}

      <section className="report-archive">

        <div className="reports-section-heading">
          <div>
            <span className="reports-eyebrow">DOCUMENT LIBRARY</span>
            <h2>Generated Reports</h2>
            <p>Previously recorded sample forensic reports.</p>
          </div>

          <span className="evidence-count">03 DOCUMENTS</span>
        </div>

        <div className="report-document-list">

          {reports.map((report) => (
            <div className="report-document" key={report.id}>

              <div className="document-icon">
                <FileText size={20} />
              </div>

              <div className="document-details">
                <strong>{report.name}</strong>
                <span>{report.id} · {report.date}</span>
              </div>

              <div className="document-verdict">
                <span className={report.verdict.toLowerCase()}>
                  {report.verdict}
                </span>
                <small>{report.confidence}</small>
              </div>

              <Link
                to="/results"
                state={{ fileName: report.name }}
                className="document-open"
                title="View sample report"
              >
                <ArrowUpRight size={17} />
              </Link>

            </div>
          ))}

        </div>

      </section>

      <div className="reports-demo-note">
        <AlertTriangle size={15} />
        All findings and scores displayed here are sample demonstration values.
        Actual forensic reports will be generated after AI model and backend integration.
      </div>

    </div>
  );
};

const FileVideoIcon = () => <FileText size={18} />;

export default ForensicReports;
