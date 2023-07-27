import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import theme from "./Common/ThemeProvider";
import HomeScreen from "./screens/HomeScreen";
import { Footer } from "./Footer/Footer";
import MediaScreen from "./screens/MediaScreen";
import SupportScreen from "./screens/SupportScreen";
import QRScreen from "./screens/QRScreen";
import PortalScreen from "./screens/PortalScreen";
import LoginScreen from "./screens/LoginScreen";
import ErrorScreen from "./screens/ErrorScreen";
import PreRegistrationScreen from "./screens/PreRegistrationScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter basename="/">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="media" element={<MediaScreen />} />
            <Route path="support" element={<SupportScreen />} />
            <Route path="qr" element={<QRScreen />} />
            <Route path="portal" element={<PortalScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="prereg" element={<PreRegistrationScreen />} />
            <Route path="contact" element={<ContactScreen />} />

            <Route path="*" element={<ErrorScreen />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
