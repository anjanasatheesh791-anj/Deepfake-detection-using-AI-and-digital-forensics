import {
  Activity,
  ScanFace,
  ShieldCheck,
  Clock3,
  ArrowUpRight,
  Play,
  FileSearch,
} from "lucide-react";

import { Link } from "react-router-dom";
import faceScanHero from "../../assets/face-scan-hero.png";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Top Navigation */}
      <header className="topbar">
        <div>
          <p className="breadcrumb">WORKSPACE / OVERVIEW</p>
          <h2>Dashboard</h2>
        </div>

        <div className="topbar-right">
          <span className="system-status">
            <span className="status-dot"></span>
            SYSTEM OPERATIONAL
          </span>

          <div className="profile-avatar">A</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="welcome-section">

        <img
          src={faceScanHero}
          alt="AI-powered facial recognition and digital forensic scanning"
          className="hero-background"
        />

        <div className="welcome-overlay"></div>

        <div className="welcome-content">
          <span className="eyebrow">
            DIGITAL FORENSICS PLATFORM
          </span>

          <h1>
            See Beyond What's <span>Real.</span>
          </h1>

          <p>
            Analyze digital media, identify manipulated content,
            and uncover hidden inconsistencies with AI-powered
            forensic intelligence.
          </p>

          <Link to="/new-analysis" className="primary-button">
            <Play size={17} />
            Start New Analysis
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="hero-image-label">
          <span className="status-dot"></span>
          AI FACIAL ANALYSIS
        </div>

      </section>

      {/* Statistics */}
      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon blue">
            <Activity size={21} />
          </div>
          <p>TOTAL ANALYSES</p>
          <h2>128</h2>
          <span>All processed files</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <ShieldCheck size={21} />
          </div>
          <p>AUTHENTIC MEDIA</p>
          <h2>86</h2>
          <span>Sample dashboard data</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon violet">
            <ScanFace size={21} />
          </div>
          <p>MANIPULATED MEDIA</p>
          <h2>32</h2>
          <span>Sample dashboard data</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon amber">
            <Clock3 size={21} />
          </div>
          <p>PENDING REVIEWS</p>
          <h2>10</h2>
          <span>Awaiting analysis</span>
        </div>

      </section>

      {/* Detection Modules */}
      <section className="modules-section">

        <div className="section-heading">
          <div>
            <span className="eyebrow">CORE TECHNOLOGY</span>
            <h2>Detection Modules</h2>
          </div>

          <span className="module-count">02 MODULES</span>
        </div>

        <div className="modules-grid">

          {/* Module 01 */}
          <div className="module-card">
            <div className="module-icon blue">
              <ScanFace size={25} />
            </div>

            <span className="module-tag">MODULE 01</span>

            <h3>Eye Reflection Analysis</h3>

            <p>
              Examines eye reflections and lighting inconsistencies
              to identify possible visual manipulation.
            </p>

            <div className="module-footer">
              <span>VISUAL FORENSICS</span>
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Module 02 */}
          <div className="module-card">
            <div className="module-icon violet">
              <Activity size={25} />
            </div>

            <span className="module-tag">MODULE 02</span>

            <h3>Lip-Sync Detection</h3>

            <p>
              Analyzes audio and mouth movements to identify
              synchronization inconsistencies.
            </p>

            <div className="module-footer">
              <span>AUDIO-VISUAL FORENSICS</span>
              <ArrowUpRight size={18} />
            </div>
          </div>

        </div>
      </section>

      {/* Recent Activity */}
      <section className="recent-section">

        <div className="section-heading">
          <div>
            <span className="eyebrow">ACTIVITY LOG</span>
            <h2>Recent Analyses</h2>
          </div>

          <FileSearch size={21} />
        </div>

        <div className="empty-state">
          <FileSearch size={30} />

          <h3>No analysis records yet</h3>

          <p>
            Your recent video analyses will appear here.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Dashboard;
