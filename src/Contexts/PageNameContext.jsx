import React, { createContext, useContext, useState } from 'react';

const PageNameContext = createContext();

export const usePageName = () => useContext(PageNameContext);

export const PageNameProvider = ({ children }) => {
  const [pageName, setPageName] = useState('');
  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      {children}
    </PageNameContext.Provider>
  );
};
