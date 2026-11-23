import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import NewAnalysis from "./pages/NewAnalysis/NewAnalysis";
import AnalysisProgress from "./pages/AnalysisProgress/AnalysisProgress";
import Results from "./pages/Results/Results";
import AnalysisHistory from "./pages/History/AnalysisHistory";
import ForensicReports from "./pages/Reports/ForensicReports";
import Settings from "./pages/Settings/Settings";

import "./styles/dashboard.css";
import "./styles/newAnalysis.css";
import "./styles/progress.css";
import "./pages/Results/results.css";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-analysis" element={<NewAnalysis />} />
          <Route path="/analysis-progress" element={<AnalysisProgress />} />
          <Route path="/results" element={<Results />} />
          <Route path="/history" element={<AnalysisHistory />} />
          <Route path="/reports" element={<ForensicReports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
