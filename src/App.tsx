import Header from "~/components/Header/Header";
import HomePage from "~/pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="bg-gray">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
