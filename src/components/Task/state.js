export const ADD_IMAGES = "ADD_IMAGES";
export const REMOVE_IMAGE = "REMOVE_IMAGE";
export const LOAD_STORAGE = "LOAD_STORAGE";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

// TODO: implment immer when app grows
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_IMAGES:
      return {
        ...state,
        images: [...payload.images, ...state.images]
      }
    case LOAD_STORAGE:
      return {
        ...state,
        images: [...payload.images, ...state.images]
      }
    case REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter(img => img.id !== payload.imgId)
      }
    case TOGGLE_COMPLETE:
      return {
        ...state,
        isCompleted: !state.isCompleted
      }
    default:
      return state;
  }
}

export default reducer;