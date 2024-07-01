import React, { createContext, useState, PropsWithChildren, useMemo } from 'react';

type CategoryState = {
  emotion: { value: string; label: string };
  time: { value: string; label: string };
  weather: { value: string; label: string };
};

export const CategoryContext = createContext<{
  category: CategoryState;
  setCategory: React.Dispatch<React.SetStateAction<CategoryState>>;
}>({
  category: {
    emotion: { value: '', label: '' },
    time: { value: '', label: '' },
    weather: { value: '', label: '' },
  },
  setCategory: () => {},
});

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState({
    emotion: { value: '', label: '' },
    time: { value: '', label: '' },
    weather: { value: '', label: '' },
  });

  const contextValue = useMemo(() => ({ category, setCategory }), [category, setCategory]);

  return <CategoryContext.Provider value={contextValue}>{children}</CategoryContext.Provider>;
};
