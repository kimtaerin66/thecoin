import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


interface IToggle {
  toggle: () => void;
  darkMode : boolean;
}

function Router({ toggle, darkMode }: IToggle) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/thecoin" element={<Home toggle={toggle}/>} />
      </Routes>
      <Routes>
        <Route path="/thecoin/:market" element={<Detail darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
