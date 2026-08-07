/** @format */

import { useState,useEffect} from "react";

export default function useLocalStorageState(key,initialState) {
  const [Value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || null;
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //save darkmode in localstorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(Value));
  }, [Value, key]);

  return [ Value, setValue ];
}
