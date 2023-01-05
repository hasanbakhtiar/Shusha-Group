const blogState = [];
// REDUCER
export const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];
    case "REMOVE_BLOG":
      return "add remove";
    case "UPDATE_BLOG":
      return "add update";
    default:
      break;
  }
};