import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import theme from "./Common/ThemeProvider";
import HomeScreen from "./screens/HomeScreen";
import Support from "./screens/SupportScreen";
import { Footer } from "./Footer/Footer";
import Media from "./screens/MediaScreen";
import MediaScreen from "./screens/MediaScreen";
import SupportScreen from "./screens/SupportScreen";
import QRScreen from "./screens/QRScreen";
import PortalScreen from "./screens/PortalScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  const Error = () => {
    return <h1>Error</h1>;
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter basename="/vdollhouse">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="media" element={<MediaScreen />} />
            <Route path="support" element={<SupportScreen />} />
            <Route path="qr" element={<QRScreen />} />
            <Route path="portal" element={<PortalScreen />} />
            <Route path="login" element={<LoginScreen />} />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
