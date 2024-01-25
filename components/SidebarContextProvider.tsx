"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<any>(undefined);

const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);

export default SidebarContextProvider;
