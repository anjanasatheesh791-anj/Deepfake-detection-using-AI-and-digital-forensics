
import {
  Settings2,
  Monitor,
  ScanFace,
  FileText,
  ShieldCheck,
  Info,
  ChevronRight,
  Moon,
  Bell,
  Video,
  Eye,
  AudioLines,
  FileCheck2,
  Database,
  Cpu,
} from "lucide-react";

import "./settings.css";

const Settings = () => {
  return (
    <div className="settings-page">

      {/* HEADER */}
      <div className="settings-header">
        <div>
          <div className="settings-eyebrow">
            <Settings2 size={15} />
            SYSTEM CONFIGURATION
          </div>

          <h1>Settings</h1>

          <p>
            Manage your DEEPTRACE application preferences
            and analysis configurations.
          </p>
        </div>

        <div className="settings-header-icon">
          <Settings2 size={25} />
        </div>
      </div>

      {/* GENERAL PREFERENCES */}
      <section className="settings-section">
        <div className="settings-section-heading">
          <div className="settings-section-icon blue">
            <Monitor size={19} />
          </div>

          <div>
            <h2>General Preferences</h2>
            <p>Application appearance and user preferences</p>
          </div>
        </div>

        <div className="settings-panel">

          <div className="settings-row">
            <div className="settings-row-icon">
              <Moon size={18} />
            </div>

            <div className="settings-row-content">
              <h3>Appearance</h3>
              <p>Current application theme</p>
            </div>

            <span className="settings-value">
              Dark Mode
            </span>
          </div>

          <div className="settings-divider" />

          <div className="settings-row">
            <div className="settings-row-icon">
              <Bell size={18} />
            </div>

            <div className="settings-row-content">
              <h3>Notifications</h3>
              <p>Analysis completion notifications</p>
            </div>

            <span className="settings-value muted">
              Not configured
            </span>
          </div>

        </div>
      </section>

      {/* ANALYSIS CONFIGURATION */}
      <section className="settings-section">
        <div className="settings-section-heading">
          <div className="settings-section-icon purple">
            <ScanFace size={19} />
          </div>

          <div>
            <h2>Analysis Configuration</h2>
            <p>Detection methods used during video examination</p>
          </div>
        </div>

        <div className="settings-panel">

          <div className="settings-row">
            <div className="settings-row-icon">
              <Video size={18} />
            </div>

            <div className="settings-row-content">
              <h3>Supported Input</h3>
              <p>Video file format</p>
            </div>

            <span className="settings-value">
              MP4 / AVI / MOV
            </span>
          </div>

          <div className="settings-divider" />

          <div className="settings-row">
            <div className="settings-row-icon">
              <Eye size={18} />
            </div>

            <div className="settings-row-content">
              <h3>Eye Reflection Analysis</h3>
              <p>Examination of eye reflection consistency</p>
            </div>

            <span className="settings-status">
              Planned
            </span>
          </div>

          <div className="settings-divider" />

          <div className="settings-row">
            <div className="settings-row-icon">
              <AudioLines size={18} />
            </div>

            <div className="settings-row-content">
              <h3>Lip-Sync Detection</h3>
              <p>Audio and mouth movement synchronization</p>
            </div>

            <span className="settings-status">
              Planned
            </span>
          </div>

        </div>
      </section>

      {/* REPORT PREFERENCES */}
      <section className="settings-section">
        <div className="settings-section-heading">
          <div className="settings-section-icon green">
            <FileText size={19} />
          </div>

          <div>
            <h2>Report Preferences</h2>
            <p>Forensic report and evidence documentation</p>
          </div>
        </div>

        <div className="settings-panel">

          <div className="settings-row">
            <div className="settings-row-icon">
              <FileCheck2 size={18} />
            </div>

            <div className="settings-row-content">
              <h3>Report Format</h3>
              <p>Preferred forensic report format</p>
            </div>

            <span className="settings-value">
              PDF (Planned)
            </span>
          </div>

          <div className="settings-divider" />

          <div className="settings-row">
            <div className="settings-row-icon">
              <ShieldCheck size={18} />
            </div>

            <div className="settings-row-content">
              <h3>Digital Evidence Integrity</h3>
              <p>File hash and integrity verification</p>
            </div>

            <span className="settings-status">
              Planned
            </span>
          </div>

        </div>
      </section>

      {/* SYSTEM INFORMATION */}
      <section className="settings-section">
        <div className="settings-section-heading">
          <div className="settings-section-icon amber">
            <Info size={19} />
          </div>

          <div>
            <h2>System Information</h2>
            <p>Platform details and technical information</p>
          </div>
        </div>

        <div className="settings-info-grid">

          <div className="settings-info-card">
            <Database size={19} />
            <span>Platform</span>
            <strong>DEEPTRACE</strong>
          </div>

          <div className="settings-info-card">
            <Cpu size={19} />
            <span>Frontend</span>
            <strong>React + TypeScript</strong>
          </div>

          <div className="settings-info-card">
            <ShieldCheck size={19} />
            <span>Project Version</span>
            <strong>Version 1.0</strong>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <div className="settings-footer">
        <ShieldCheck size={16} />
        <span>
          DEEPTRACE · Digital Forensics Intelligence Platform
        </span>
      </div>

    </div>
  );
};

export default Settings;
