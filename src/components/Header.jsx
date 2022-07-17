import React from "react";

const Header = ({ title }) => {
  return (
    <header className="py-4 px-3 text-center bg-primary">
      <h1 className="text-white">
        <strong>{title}</strong>
      </h1>
    </header>
  );
};

export default Header;
