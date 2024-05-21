import "./App.css";
import ThemeProvider from "./Components/ThemeProvider";
import Homepage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Resume" element={<ResumePage />} />
            <Route path="/Projects" element={<ProjectPage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
