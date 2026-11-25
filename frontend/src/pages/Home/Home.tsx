
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ScanFace,
  Eye,
  EyeOff,
  ArrowRight,
  Fingerprint,
  FileSearch,
  Activity,
} from "lucide-react";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="home-page">
      <nav className="home-navbar">
        <a href="/" className="home-brand">
          <div className="home-brand-icon">
            <ShieldCheck size={23} />
          </div>
          <div>
            <h2>DEEPTRACE</h2>
            <span>FORENSIC INTELLIGENCE</span>
          </div>
        </a>

        <div className="home-nav-links">
          <a href="#about">About Us</a>
          <a href="#technology">Technology</a>
          <button onClick={() => navigate("/dashboard")}>
            Explore Dashboard <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      <main>
        <section className="home-hero">
          <div className="home-hero-content">
            <div className="home-eyebrow">
              <span className="home-eyebrow-dot" />
              AI-POWERED DIGITAL FORENSICS
            </div>

            <h1>
              Trust what you
              <br />
              <span>see.</span> Verify what
              <br />
              you believe.
            </h1>

            <p className="home-hero-description">
              Detect manipulated media through intelligent deepfake analysis
              and digital forensic investigation. Bringing transparency,
              explainability, and trust to digital content.
            </p>

            <div className="home-hero-points">
              <div>
                <ShieldCheck size={17} />
                <span>Media authenticity</span>
              </div>
              <div>
                <ScanFace size={17} />
                <span>AI-based detection</span>
              </div>
              <div>
                <Fingerprint size={17} />
                <span>Forensic evidence</span>
              </div>
            </div>

            <a href="#about" className="home-learn-link">
              Discover DEEPTRACE <ArrowRight size={16} />
            </a>
          </div>

          <div className="home-login-area">
            <div className="home-login-card">
              <div className="login-card-icon">
                <ShieldCheck size={27} />
              </div>

              <p className="login-overline">WELCOME BACK</p>
              <h2>Access your workspace</h2>
              <p className="login-description">
                Sign in to continue to your forensic intelligence dashboard.
              </p>

              <form onSubmit={handleSignIn}>
                <label htmlFor="login-email">Email address</label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />

                <div className="password-label-row">
                  <label htmlFor="login-password">Password</label>
                </div>

                <div className="password-input-wrapper">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <button type="submit" className="login-submit">
                  Sign In <ArrowRight size={17} />
                </button>
              </form>

              <div className="login-security-note">
                <ShieldCheck size={15} />
                <span>Secure forensic workspace</span>
              </div>
            </div>
          </div>
        </section>

        <section className="home-about" id="about">
          <div className="section-heading">
            <span>ABOUT DEEPTRACE</span>
            <h2>Understanding the truth behind digital media.</h2>
            <p>
              As AI-generated and manipulated media become increasingly
              realistic, identifying authentic content is more important
              than ever.
            </p>
          </div>

          <div className="home-about-grid">
            <article className="about-card">
              <div className="about-card-icon blue">
                <ScanFace size={23} />
              </div>
              <h3>Intelligent Detection</h3>
              <p>
                Uses AI-driven analysis to examine visual and audio-visual
                inconsistencies that may indicate manipulated media.
              </p>
            </article>

            <article className="about-card">
              <div className="about-card-icon violet">
                <FileSearch size={23} />
              </div>
              <h3>Digital Forensics</h3>
              <p>
                Examines media characteristics and presents useful
                investigation details to support authenticity assessment.
              </p>
            </article>

            <article className="about-card">
              <div className="about-card-icon green">
                <Activity size={23} />
              </div>
              <h3>Explainable Results</h3>
              <p>
                Presents detection findings through understandable signals,
                confidence indicators, and forensic reports.
              </p>
            </article>
          </div>
        </section>

        <section className="home-technology" id="technology">
          <div>
            <span>OUR APPROACH</span>
            <h2>Beyond detection. Towards digital trust.</h2>
          </div>
          <p>
            DEEPTRACE focuses on analysing facial and audio-visual signals,
            including eye-reflection consistency and lip-sync patterns, to
            support deepfake identification and forensic reporting.
          </p>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-footer-brand">
          <ShieldCheck size={19} />
          <span>DEEPTRACE</span>
        </div>
        <p>AI-Powered Deepfake Detection & Digital Forensics</p>
        <span className="footer-copy">© 2026 DEEPTRACE</span>
      </footer>
    </div>
  );
};

export default Home;
