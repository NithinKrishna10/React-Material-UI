import { useState } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from "./pages/TestPage";
import Layout from "./Layout";
import Navbar from "./components/Navbar";


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
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
