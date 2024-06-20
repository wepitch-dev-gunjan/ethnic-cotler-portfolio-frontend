import React, { createContext, useState } from "react";
export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [profileMenuEnable, setProfileMenuEnable] = useState(false);

  return (
    <LayoutContext.Provider value={{
      profileMenuEnable, setProfileMenuEnable
    }}>
      {children}
    </LayoutContext.Provider>
  );
};
