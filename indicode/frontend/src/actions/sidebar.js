import { SIDE_BAR } from "./types";

// GET LEARNING MATERIAL
export const setSidebar = () => (dispatch) => {
  console.log("SIDEBAR dispatched");
  dispatch({
    type: SIDE_BAR,
  });
};
