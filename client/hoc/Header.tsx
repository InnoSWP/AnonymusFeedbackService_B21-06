import React from "react";
import { PropsWithChildren } from "react";
import face from "./../assets/face.png";

interface HeaderI {
  children?: React.ReactNode;
}

const Header: React.FC<PropsWithChildren<HeaderI>> = ({ children }) => {
  return (
    <>
      <header className="Header">
        <div className="data">
          <span>Nursultan Askarbekuly</span>
          <img src={face.src} alt="face" />
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
