import { createSlice } from "@reduxjs/toolkit";
export const noteslice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    color: "",
    itemsspare: [],
  },
  reducers: {
    addnotes: (state, actions) => {
      state.items.push(actions.payload);
      state.itemsspare.push(actions.payload);
    },
    chooseColor: (state, actions) => {
      state.color = actions.payload;
    },
    search: (state, actions) => {
      state.itemsspare = state.items.filter((item) =>
        item.note.includes(actions.payload)
      );
    },
    destroy: (state, actions) => {
      state.items = state.items.filter((item) => item.note !== actions.payload);
      state.itemsspare = state.itemsspare.filter(
        (item) => item.note !== actions.payload
      );
    },
  },
});
export default noteslice.reducer;
export const { chooseColor, addnotes, destroy, search } = noteslice.actions;
