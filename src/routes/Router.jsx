import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Player from "../pages/Player";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player" element={<Player />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router