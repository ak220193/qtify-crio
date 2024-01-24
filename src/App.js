import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [searchData, useSearchData] = useState();
  return (
    <>
      <Navbar searchData={searchData} />
    </>
  );
}

export default App;
