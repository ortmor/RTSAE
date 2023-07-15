import React from "react";
import Footer from "./Footer";
import NavigationMenu from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div >
      {/* Place your navbar component here */}

      <NavigationMenu />

      {/* Render the content of the specific page */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
