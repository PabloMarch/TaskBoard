import { useState, useCallback } from 'react';

export const getStateFromLocalStorage = (key) => {
  if (!window.localStorage) return;
  const storage = localStorage.getItem(key);
  if (storage) return JSON.parse(storage);
  return null;
};

export const storeStateInLocalStorage = (key, state) => {
  if (!window.localStorage) return;
  window.localStorage.setItem(key, JSON.stringify(state));
  console.log(localStorage);
};

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  const setValue = useCallback(
    value => {
      try {
        if (!window.localStorage) return;
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        // console.log("LOCALSTORAGE:: ", key, value);
      } catch (error) {
        console.log(error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}

export default useLocalStorage;