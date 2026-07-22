import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";

export default function() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/quem-somos" element={<About />} />
        </Routes>
    )
}