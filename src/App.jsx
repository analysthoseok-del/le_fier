import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import InquirePage from "./pages/InquirePage";
import VoyagesPage from "./pages/VoyagesPage";
import YachtPage from "./pages/YachtPage";
import SuitesPage from "./pages/SuitesPage";
import NotFoundPage from "./pages/NotFoundPage";

const getPath = () => window.location.pathname.replace(/^\/+/, "") || "home";

export default function App() {
  const [path, setPath] = useState(getPath());

  const navigate = (to = "/") => {
    window.history.pushState({}, "", to);
    setPath(getPath());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const routes = {
    home: <HomePage navigate={navigate} />,
    inquire: <InquirePage navigate={navigate} />,
    voyages: <VoyagesPage navigate={navigate} />,
    yacht: <YachtPage navigate={navigate} />,
    suites: <SuitesPage navigate={navigate} />,
  };

  const page = routes[path] || (path === "404" ? <NotFoundPage navigate={navigate} /> : <HomePage navigate={navigate} />);

  return (
    <div className="app-shell">
      <Header navigate={navigate} />
      <main>{page}</main>
      <Footer navigate={navigate} />
      <ScrollToTop />
    </div>
  );
}