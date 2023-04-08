import React from "react";
import { search } from "../redux/notesSlice";
import { useDispatch } from "react-redux";
function header() {
  const searchDispatch = useDispatch();
  return (
    <div>
      <input
        placeholder="search..."
        className="rounded-pill p-2 border-0 mt-2"
        onChange={(e) => searchDispatch(search(e.target.value))}
      />
    </div>
  );
}

export default header;
