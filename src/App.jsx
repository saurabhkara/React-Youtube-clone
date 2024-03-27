import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import { useState } from "react";

export default function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <Navbar setOpenSidebar={setOpenSidebar} />
      <Routes>
        <Route path="/" element={<Home openSidebar={openSidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}
