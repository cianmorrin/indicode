import { SIDE_BAR } from "./types";

// GET LEARNING MATERIAL
export const setSidebar = () => (dispatch) => {
  dispatch({
    type: SIDE_BAR,
  });
};
