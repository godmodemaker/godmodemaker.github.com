import { useEffect } from "react";
import TableComponent from "./TableComponent";
import { useState } from "react";

const GodModes = () => {
  useEffect(() => {
    document.title = "GodModes | God Mode Maker";
  }, []);
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="w-full md:w-[75%] lg:w-[45%]">
      <div className="h-0 md:h-10"></div>
      <h1 className="text-3xl font-bebasNeue text-center">
        List of All God Modes
      </h1>
      <h2 className="text-center">(DON'T FORGET TO READ THE README)</h2>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="text-secondary w-[90%] md:w-[100%] bg-highlight placeholder:text-secondary p-3 my-3 rounded-lg border-2 border-[#555555] focus:shadow-lg focus:outline-none focus:border-secondary"
        />
      </div>
      <p className="text-center">Click on a row to show download links</p>
      <div className="flex justify-center mt-4">
        <TableComponent searchInput={searchInput} />
      </div>
    </div>
  );
};

export default GodModes;
