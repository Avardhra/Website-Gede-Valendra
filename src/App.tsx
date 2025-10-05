import { Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout";
import Home from "./Home";
import Experience from "./Experience";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<MainLayout />} />
        <Route path="/Experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
