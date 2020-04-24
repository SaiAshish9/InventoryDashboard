import React from "react";
// import ProductTable from "../Inventory1/components/ProductTable/ProductTable";
import SearchArea from "./components/SearchArea/SearchArea";
import AtoZ from "../Inventory1/components/AtoZ/AtoZ";
import  Nav  from "../Nav/Nav";

const Inventory4 = () => {
  return (
    <div>
   <Nav/>
      <SearchArea />
      <br />
      <AtoZ />
      {/* <ProductTable /> */}
    </div>
  );
};

export default Inventory4;
