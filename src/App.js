import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import ScrollToTop from "./components/reusables/ScrollToTop";
import Navbar from "./components/reusables/Narbar";
import Footer from "./components/reusables/Footer";
import Home from "./views/home";
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
