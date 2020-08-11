import { useState, useCallback } from 'react';

// TODO: remove this validation an safely call from components
const isServer = () => typeof window === 'undefined' && !window.localStorage;

// get stored data from localstorage
export const getStateFromLocalStorage = (key) => {
  try {
    if (isServer()) return;
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage);
    return null;
  } catch (error) {
    console.log(error);
  }
};

// store data from localstorage
export const storeStateInLocalStorage = (key, state) => {
  try {
    if (isServer()) return;
    window.localStorage.setItem(key, JSON.stringify(state));
    console.log(localStorage);
  } catch (error) {
    console.log(error);
  }
};

// HOOK
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (isServer()) return;
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
        if (isServer()) return;
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