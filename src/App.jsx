import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { MyNavbar } from "./components/navbar/MyNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
