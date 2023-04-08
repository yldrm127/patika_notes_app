import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import { destroy } from "../redux/notesSlice";
function notesList() {
  const destroyDispatch = useDispatch();
  const noteSelector = useSelector((state) => state.notes.itemsspare);
  return (
    <div className="d-flex flex-wrap">
      {noteSelector.map((item, key) => (
        <div key={key} className={`${item.color} note`}>
          <GrFormClose
            className="destroy"
            onClick={() => destroyDispatch(destroy(item.note))}
          />
          {item.note}
        </div>
      ))}
    </div>
  );
}

export default notesList;
