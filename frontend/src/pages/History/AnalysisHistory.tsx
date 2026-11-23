import {
  Search,
  Filter,
  FileVideo,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle,
  Clock3,
  ScanSearch,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./history.css";
const historyData = [
  {
    id: "DF-2026-001",
    name: "interview_recording.mp4",
    date: "22 Nov 2026",
    duration: "00:02:34",
    verdict: "FAKE",
    confidence: "94.6%",
    status: "Completed",
  },
  {
    id: "DF-2026-002",
    name: "meeting_video.mp4",
    date: "21 Nov 2026",
    duration: "00:01:48",
    verdict: "REAL",
    confidence: "97.2%",
    status: "Completed",
  },
  {
    id: "DF-2026-003",
    name: "social_media_clip.mp4",
    date: "20 Nov 2026",
    duration: "00:00:56",
    verdict: "INCONCLUSIVE",
    confidence: "61.3%",
    status: "Completed",
  },
];

const AnalysisHistory = () => {
  return (
    <div className="history-page">

      <header className="history-header">
        <div>
          <span className="page-eyebrow">INVESTIGATION ARCHIVE</span>
          <h1>Analysis History</h1>
          <p>
            Review and manage your previous forensic investigations.
          </p>
        </div>

        <Link to="/new-analysis" className="history-new-button">
          <ScanSearch size={17} />
          New Analysis
        </Link>
      </header>

      <section className="history-stats">

        <div className="history-stat-card">
          <div className="history-stat-icon blue">
            <FileVideo size={19} />
          </div>
          <span>Total Analyses</span>
          <h2>03</h2>
          <small>Recorded investigations</small>
        </div>

        <div className="history-stat-card">
          <div className="history-stat-icon red">
            <AlertTriangle size={19} />
          </div>
          <span>Fake Videos</span>
          <h2>01</h2>
          <small>Potential manipulation detected</small>
        </div>

        <div className="history-stat-card">
          <div className="history-stat-icon green">
            <ShieldCheck size={19} />
          </div>
          <span>Real Videos</span>
          <h2>01</h2>
          <small>No major anomalies detected</small>
        </div>

        <div className="history-stat-card">
          <div className="history-stat-icon violet">
            <Clock3 size={19} />
          </div>
          <span>Last Analysis</span>
          <h2>Today</h2>
          <small>22 November 2026</small>
        </div>

      </section>

      <section className="history-content">

        <div className="history-content-header">
          <div>
            <h2>Previous Investigations</h2>
            <p>All your recorded video analysis sessions</p>
          </div>

          <span className="history-count">03 RECORDS</span>
        </div>

        <div className="history-toolbar">

          <div className="history-search">
            <Search size={17} />
            <input
              type="text"
              placeholder="Search by filename or analysis ID..."
            />
          </div>

          <button className="history-filter-button">
            <Filter size={16} />
            Filter
          </button>

        </div>

        <div className="history-table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>VIDEO FILE</th>
                <th>ANALYSIS ID</th>
                <th>DATE</th>
                <th>VERDICT</th>
                <th>CONFIDENCE</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {historyData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="history-file">
                      <div className="history-file-icon">
                        <FileVideo size={18} />
                      </div>
                      <div>
                        <strong>{item.name}</strong>
                        <small>{item.duration}</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="history-id">{item.id}</span>
                  </td>

                  <td>{item.date}</td>

                  <td>
                    <span className={`verdict-badge ${item.verdict.toLowerCase()}`}>
                      {item.verdict}
                    </span>
                  </td>

                  <td>
                    <strong className="history-confidence">
                      {item.confidence}
                    </strong>
                  </td>

                  <td>
                    <span className="history-status">
                      <span />
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <Link
                      to="/results"
                      state={{ fileName: item.name }}
                      className="history-view-button"
                      title="View sample results"
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="history-disclaimer">
          <AlertTriangle size={15} />
          <span>
            These are sample investigation records for frontend demonstration.
            Actual records will be loaded from the backend database.
          </span>
        </div>

      </section>

    </div>
  );
};

export default AnalysisHistory;
