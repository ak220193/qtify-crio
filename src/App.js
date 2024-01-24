import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  const [searchData, useSearchData] = useState();
  return (
    <>
      <Navbar searchData={searchData} />
      <Hero />
    </>
  );
}

export default App;
