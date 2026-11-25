import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  History,
  FileText,
  Settings,
  ShieldCheck,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <ShieldCheck size={24} />
        </div>
        <div>
          <h2>DEEPTRACE</h2>
          <span>FORENSIC INTELLIGENCE</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">WORKSPACE</p>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/new-analysis"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Upload size={19} />
          <span>New Analysis</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <History size={19} />
          <span>Analysis History</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">INVESTIGATION</p>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <FileText size={19} />
          <span>Forensic Reports</span>
        </NavLink>
      </div>

      <div className="sidebar-bottom">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>

        <div className="sidebar-status">
          <span className="status-dot"></span>
          Detection System Ready
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
