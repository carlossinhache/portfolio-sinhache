// import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar.jsx";
import Info from "./components/Info.jsx";
import MoreInfo from "./components/MoreInfo.jsx";
import Footer from "./components/Footer.jsx";
// import CatFacts from "./components/CatFacts.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Info />
      {/* <CatFacts /> */}
      <MoreInfo />
      <Footer />
    </>
  );
}

export default App;
