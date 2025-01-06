import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./pages/Home";
import Navbar from "./components/Navbar";




function App() {
  return (
    <>
      <Header />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
