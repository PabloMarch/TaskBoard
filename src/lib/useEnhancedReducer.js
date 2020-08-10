import { useCallback, useReducer } from "react";

// Reducer actions logger
const logger = (action) => console.info("ACTION:: ", action);

// Enhanced reducer with logger and thunk
const useEnhancedReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchThunk = useCallback(
    action => {
      if (typeof action === 'function') {
        action(dispatch);
      } else {
        dispatch(action);
      }

      logger(action);
    },
    [dispatch]
  );

  return [state, dispatchThunk];
};

export default useEnhancedReducer;