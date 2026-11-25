import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ScanFace,
  Fingerprint,
  ArrowRight,
  Play,
  BarChart3,
  Database,
  Zap,
  BrainCircuit,
  Search,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import faceScanHero from "../../assets/face-scan-hero.png";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStartAnalysis = () => {
    navigate("/new-analysis");
  };

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}
      <header className="home-navbar">
        <a href="/" className="home-brand">
          <div className="home-brand-icon">
            <ShieldCheck size={25} />
          </div>

          <div className="home-brand-text">
            <h2>DEEPTRACE</h2>
            <span>FORENSIC INTELLIGENCE</span>
          </div>
        </a>

        <nav className="home-nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#technology">
            Technology
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#faq">
            FAQ
          </a>

          <button
            className="home-get-started"
            onClick={handleGetStarted}
          >
            Get Started
            <ArrowRight size={17} />
          </button>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section className="home-hero" id="home">

          <div className="hero-background-glow glow-one" />
          <div className="hero-background-glow glow-two" />

          {/* LEFT CONTENT */}
          <div className="home-hero-content">

            <div className="home-eyebrow">
              <span className="home-eyebrow-dot" />
              AI-POWERED DIGITAL FORENSICS
            </div>

            <h1>
              Trust what you{" "}
              <span>see.</span>
              <br />
              Verify what you{" "}
              <span>believe.</span>
            </h1>

            <p className="home-hero-description">
              Detect manipulated media through intelligent deepfake
              analysis and digital forensic investigation.
            </p>

            {/* HERO BUTTONS */}
            <div className="home-hero-actions">

              <button
                className="hero-primary-button"
                onClick={handleStartAnalysis}
              >
                Start Analysis
                <ArrowRight size={18} />
              </button>

              <button className="hero-demo-button">
                <span className="demo-icon">
                  <Play size={14} fill="currentColor" />
                </span>
                Watch Demo
              </button>

            </div>

            {/* HERO FEATURES */}
            <div className="home-hero-points">

              <div className="hero-point">
                <ShieldCheck size={25} />
                <div>
                  <strong>Media Authenticity</strong>
                  <span>Made Simple</span>
                </div>
              </div>

              <div className="hero-point">
                <Zap size={27} />
                <div>
                  <strong>AI-Powered</strong>
                  <span>Detection</span>
                </div>
              </div>

              <div className="hero-point">
                <Fingerprint size={27} />
                <div>
                  <strong>Forensic-Grade</strong>
                  <span>Insights</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="home-hero-visual">

            <div className="hero-image-glow" />

            <div className="hero-image-wrapper">
              <img
                src={faceScanHero}
                alt="AI powered deepfake facial analysis"
              />
            </div>

            {/* Decorative orbital effects */}
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

          </div>

        </section>

        {/* ================= STATISTICS ================= */}
        <section className="home-capability-strip">

          <div className="capability-item">
            <BarChart3 size={32} />

            <div>
              <strong>99.7%</strong>
              <span>Detection Accuracy</span>
            </div>
          </div>

          <div className="capability-divider" />

          <div className="capability-item">
            <Database size={32} />

            <div>
              <strong>1M+</strong>
              <span>Media Analysed</span>
            </div>
          </div>

          <div className="capability-divider" />

          <div className="capability-item">
            <Zap size={32} />

            <div>
              <strong>&lt; 2s</strong>
              <span>Analysis Time</span>
            </div>
          </div>

          <div className="capability-divider" />

          <div className="capability-item">
            <ShieldCheck size={32} />

            <div>
              <strong>Enterprise-Grade</strong>
              <span>Security</span>
            </div>
          </div>

        </section>

        {/* ================= ABOUT / APPROACH ================= */}
        <section
          className="home-about"
          id="about"
        >

          <div className="home-about-intro">

            <span className="section-kicker">
              OUR APPROACH
            </span>

            <h2>
              Beyond Detection.
              <br />
              Towards <span>Digital Trust.</span>
            </h2>

            <p>
              DEEPTRACE combines cutting-edge AI with advanced
              forensic techniques to uncover manipulated content
              and provide transparent, explainable results.
            </p>

            <a
              href="#technology"
              className="learn-more-button"
            >
              Learn More
              <ArrowRight size={16} />
            </a>

          </div>

          {/* FEATURE CARDS */}
          <div
            className="home-about-grid"
            id="features"
          >

            <article className="about-card">

              <div className="about-card-icon">
                <BrainCircuit size={27} />
              </div>

              <div className="about-card-content">
                <h3>Intelligent Detection</h3>

                <p>
                  Identify deepfakes with advanced AI models.
                </p>
              </div>

              <div className="card-arrow">
                <ArrowRight size={17} />
              </div>

            </article>

            <article className="about-card">

              <div className="about-card-icon">
                <Search size={27} />
              </div>

              <div className="about-card-content">
                <h3>Digital Forensics</h3>

                <p>
                  Examine media with forensic precision.
                </p>
              </div>

              <div className="card-arrow">
                <ArrowRight size={17} />
              </div>

            </article>

            <article className="about-card">

              <div className="about-card-icon">
                <CheckCircle2 size={27} />
              </div>

              <div className="about-card-content">
                <h3>Explainable Results</h3>

                <p>
                  Get clear insights and confidence scores.
                </p>
              </div>

              <div className="card-arrow">
                <ArrowRight size={17} />
              </div>

            </article>

          </div>

        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section
          className="home-technology"
          id="technology"
        >

          <div className="technology-heading">
            <span className="section-kicker">
              OUR TECHNOLOGY
            </span>

            <h2>
              Intelligence behind
              <br />
              <span>digital authenticity.</span>
            </h2>
          </div>

          <div className="technology-content">

            <div className="technology-item">
              <ScanFace size={24} />
              <div>
                <h3>Facial Analysis</h3>
                <p>
                  Examining facial patterns and visual inconsistencies.
                </p>
              </div>
            </div>

            <div className="technology-item">
              <Fingerprint size={24} />
              <div>
                <h3>Forensic Signals</h3>
                <p>
                  Extracting digital evidence from uploaded media.
                </p>
              </div>
            </div>

            <div className="technology-item">
              <Zap size={24} />
              <div>
                <h3>AI Detection</h3>
                <p>
                  Analysing manipulated visual and audio-visual signals.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* ================= FAQ ================= */}
        <section
          className="home-faq"
          id="faq"
        >

          <div className="faq-heading">
            <span className="section-kicker">
              FAQ
            </span>

            <h2>
              Questions about
              <br />
              <span>DEEPTRACE?</span>
            </h2>
          </div>

          <div className="faq-list">

            <details>
              <summary>
                What is DEEPTRACE?
                <ChevronDown size={19} />
              </summary>

              <p>
                DEEPTRACE is an AI-powered deepfake detection and
                digital forensic analysis platform.
              </p>
            </details>

            <details>
              <summary>
                What type of media can be analysed?
                <ChevronDown size={19} />
              </summary>

              <p>
                The system is designed to analyse supported video
                media and extract useful forensic information.
              </p>
            </details>

            <details>
              <summary>
                Will the system explain its results?
                <ChevronDown size={19} />
              </summary>

              <p>
                Yes. DEEPTRACE is designed to present detection
                findings together with understandable forensic
                indicators and confidence information.
              </p>
            </details>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="home-final-cta">

          <div className="cta-glow" />

          <span className="section-kicker">
            START YOUR INVESTIGATION
          </span>

          <h2>
            Don't just watch.
            <br />
            <span>Verify.</span>
          </h2>

          <p>
            Bring clarity and confidence to the digital media
            you analyse.
          </p>

          <button
            className="hero-primary-button"
            onClick={handleStartAnalysis}
          >
            Start Analysis
            <ArrowRight size={18} />
          </button>

        </section>

        {/* ================= SCROLL INDICATOR ================= */}
        <div className="home-scroll-indicator">
          <div className="scroll-icon">
            <span />
          </div>

          <span>Scroll to Explore</span>
        </div>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        <div className="home-footer-brand">
          <ShieldCheck size={20} />
          <span>DEEPTRACE</span>
        </div>

        <p>
          AI-Powered Deepfake Detection & Digital Forensics
        </p>

        <span className="footer-copy">
          © 2026 DEEPTRACE
        </span>

      </footer>

    </div>
  );
};

export default Home;