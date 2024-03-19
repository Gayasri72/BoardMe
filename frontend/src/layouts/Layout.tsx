import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Mainheader from "../components/Header/Mainheader";
import NavigatedHeader from "../components/Header/NavigatedHeader";
import { useAppContext } from "../contexts/AppContext";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { isLoggedIn } = useAppContext();
  const [showNavigatedHeader, setShowNavigatedHeader] = useState(false);

  useEffect(() => {
    setShowNavigatedHeader(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col min-h-screen">
      {showNavigatedHeader ? <NavigatedHeader /> : <Mainheader />}
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
