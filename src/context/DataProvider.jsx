import React, { createContext, useState } from 'react'

export const Data = createContext();

const DataProvider = ({ children }) => {
    const [count,setCount] = useState(20);
  return (
    <>
    <Data.Provider value={{ count,setCount }}>{children}</Data.Provider>
    </>
  );
}

export default DataProvider