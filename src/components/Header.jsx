import React from "react";

const Header = ({ title }) => {
  return (
    <header className="py-4 py-lg-5 px-3 text-center bg-white">
      <h1 className="text-secondary">{title}</h1>
    </header>
  );
};

export default Header;
