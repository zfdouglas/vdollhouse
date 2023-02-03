import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import theme from "./Common/ThemeProvider";
function App() {
  const Home = () => {
    return <h1>Home</h1>;
  };
  const About = () => {
    return <h1>About</h1>;
  };
  const Contact = () => {
    return <h1>Contact</h1>;
  };
  const Error = () => {
    return <h1>Error</h1>;
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
