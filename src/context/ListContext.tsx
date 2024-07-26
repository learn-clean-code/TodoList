import React, { createContext, useContext, useState, ReactNode } from "react";

interface ListContextType {
  list: string[];
  addToList: (item: string) => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<string[]>([]);

  const addToList = (item: string) => {
    setList([...list, item]);
  };

  return (
    <ListContext.Provider value={{ list, addToList }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("리스트프로파이더와 함께 사용하세요");
  }
  return context;
};