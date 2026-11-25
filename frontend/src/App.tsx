
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
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
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/new-analysis"
          element={
            <MainLayout>
              <NewAnalysis />
            </MainLayout>
          }
        />

        <Route
          path="/analysis-progress"
          element={
            <MainLayout>
              <AnalysisProgress />
            </MainLayout>
          }
        />

        <Route
          path="/results"
          element={
            <MainLayout>
              <Results />
            </MainLayout>
          }
        />

        <Route
          path="/history"
          element={
            <MainLayout>
              <AnalysisHistory />
            </MainLayout>
          }
        />

        <Route
          path="/reports"
          element={
            <MainLayout>
              <ForensicReports />
            </MainLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

