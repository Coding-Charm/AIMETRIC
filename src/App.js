import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Task from "./pages/task";
import BudgetTracker from "./pages/budget-tracker";
import Calender from "./pages/calender";
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
      case "/task":
        title = "";
        metaDescription = "";
        break;
      case "/budgettracker":
        title = "";
        metaDescription = "";
        break;
      case "/calender":
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
      <Route path="/" element={<LandingPage />} />
      <Route path="/task" element={<Task />} />
      <Route path="/budgettracker" element={<BudgetTracker />} />
      <Route path="/calender" element={<Calender />} />
    </Routes>
  );
}
export default App;
