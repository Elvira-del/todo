import { useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((v: T) => T)) => void] {
  const [storedVal, setStoredVal] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setVal = (value: T | ((v: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedVal) : value;
      setStoredVal(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedVal, setVal];
}
