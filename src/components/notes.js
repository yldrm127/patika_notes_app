import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { chooseColor, addnotes } from "../redux/notesSlice";
function notes() {
  const [note, setNote] = useState("");
  const colorSelector = useSelector((state) => state.notes.color);
  const colorDispatch = useDispatch();
  const addnotesDispatch = useDispatch();
  const add = () => {
    addnotesDispatch(addnotes({ note: note, color: colorSelector }));
    setNote("");
  };
  return (
    <div>
      <textarea
        cols="70"
        rows="10"
        style={{ resize: "none" }}
        className="mt-3 border-0"
        placeholder="Notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="d-flex flex-row justify-content-between align-items-center bg-white mb-5">
        <div className="d-flex flex-row">
          <span
            className="bg-primary"
            onClick={() => colorDispatch(chooseColor("bg-primary"))}
          >
            <BsCheck
              className={colorSelector === "bg-primary" ? "" : "display"}
            />
          </span>
          <span
            className="bg-success"
            onClick={() => colorDispatch(chooseColor("bg-success"))}
          >
            <BsCheck
              className={colorSelector === "bg-success" ? "" : "display"}
            />
          </span>
          <span
            className="bg-danger"
            onClick={() => colorDispatch(chooseColor("bg-danger"))}
          >
            <BsCheck
              className={colorSelector === "bg-danger" ? "" : "display"}
            />
          </span>
          <span
            className="bg-warning"
            onClick={() => colorDispatch(chooseColor("bg-warning"))}
          >
            <BsCheck
              className={colorSelector === "bg-warning" ? "" : "display"}
            />
          </span>
          <span
            className="bg-info"
            onClick={() => colorDispatch(chooseColor("bg-info"))}
          >
            <BsCheck className={colorSelector === "bg-info" ? "" : "display"} />
          </span>
        </div>
        <button className="border-0 p-1 rounded-pill bg-success" onClick={add}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default notes;
