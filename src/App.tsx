import Header from "~/components/Header/Header";
import HomePage from "~/pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutMePage from "./pages/AboutMePage/AboutMePage";

function App() {
  return (
    <main className="bg-gray">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
