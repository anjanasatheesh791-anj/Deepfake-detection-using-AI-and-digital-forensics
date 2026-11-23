import Sidebar from "../components/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
