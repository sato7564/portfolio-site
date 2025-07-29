import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { WorksPage } from "./components/WorksPage";
import { ProfilePage } from "./components/ProfilePage";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // ページ切り替え時にトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'works':
        return <WorksPage />;
      case 'profile':
        return <ProfilePage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="pt-20">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}