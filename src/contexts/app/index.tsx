"use !!client";

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

const AppContext = createContext<{
  loading?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean | undefined>>;
  setCapturedImages?: any;
  capturedImages?: any;
  closeMobileNav?: any;
  isMobileNavOpen?: any;
  toggleMobileNav?: any;
}>({
  loading: false,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>();

  const [capturedImages, setCapturedImages] = useState([]);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        setCapturedImages,
        capturedImages,
        closeMobileNav,
        isMobileNavOpen,
        toggleMobileNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
