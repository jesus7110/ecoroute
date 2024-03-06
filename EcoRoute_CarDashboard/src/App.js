import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Hero from "./pages/Hero";
import GetStartedPage from "./pages/GetStartedPage";
import IndexPage from "./pages/IndexPage";
import SetRoute from "./pages/SetRoute";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hero":
        title = "";
        metaDescription = "";
        break;
      case "/get-started-page":
        title = "";
        metaDescription = "";
        break;
      case "/index-page":
        title = "";
        metaDescription = "";
        break;
      case "/setRoute":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/get-started-page" element={<GetStartedPage />} />
      <Route path="/index-page" element={<IndexPage />} />
      <Route path="/setroute" element={<SetRoute />} />
    </Routes>
  );
}
export default App;
