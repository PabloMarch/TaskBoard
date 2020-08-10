export const ADD_IMAGES = "ADD_IMAGES";
export const REMOVE_IMAGE = "REMOVE_IMAGE";
export const LOAD_STORAGE = "LOAD_STORAGE";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

// TODO: implment immer when app grows

function addImagesToTask(tasks, payload) {
  return tasks.map((task) => {
    if (task.serverId !== payload.taskId) return task;
    return {
      ...task,
      images: [...payload.images, ...task.images]
    }
  });
};

function removeImagesFromTask(tasks, payload) {
  return tasks.map((task) => {
    if (task.serverId !== payload.taskId) return task;
    return {
      ...task,
      images: task.images.filter(img => img.id !== payload.imgId)
    }
  });
};

function toggleCompleteTask(tasks, payload) {
  return tasks.map((task) => {
    if (task.serverId !== payload.id) return task;
    return {
      ...task,
      isCompleted: !task.isCompleted
    }
  });
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_IMAGES:
      return addImagesToTask(state, payload);
    case LOAD_STORAGE:
      return addImagesToTask(state, payload);
    case REMOVE_IMAGE:
      return removeImagesFromTask(state, payload);
    case TOGGLE_COMPLETE:
      return toggleCompleteTask(state, payload)
    default:
      return state;
  }
}

export default reducer;