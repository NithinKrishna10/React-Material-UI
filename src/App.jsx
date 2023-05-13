import { useState } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from "./pages/TestPage";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import ThemeDemo from "./components/ThemeDemo";


function App() {
  const linksArray = ["Products","Services","About","Contact Us"]
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar links={linksArray}/>
            <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage/>} />
          <Route path="/" element={<Layout/>} />
          <Route path="/theme" element={<ThemeDemo/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
