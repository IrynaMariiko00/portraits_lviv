import Header from "~/components/Header/Header";
import HomePage from "~/pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import PortraitPage from "./pages/PortraitPage/PortraitPage";
import PricePage from "./pages/PricePage/PricePage";
import { GlobalModal } from "./components/modals/GlobalModal/GlobalModal";

function App() {
  return (
    <main className="bg-gray">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<PortraitPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/price" element={<PricePage />} />
      </Routes>
      <Footer />

      <GlobalModal />
    </main>
  );
}

export default App;
