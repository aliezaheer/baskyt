import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import CompanyInsights from "./components/pages/CompanyInsights";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import InsightContainer from "./components/pages/InsightContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="mainArea">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company-insight" element={<InsightContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
