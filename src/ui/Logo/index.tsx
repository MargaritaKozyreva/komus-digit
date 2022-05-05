import React from "react";
import logo from "@images/new-logo.png";
import "./styles.scss";
import { Link } from "react-router-dom";

interface IProps {
  href: string;
}

const Logo: React.FC<IProps> = props => {
  const { href } = props;
  return (
    <div className="mainMenu__logo">
      <Link to={href} className="mainMenuLogo__link">
        <img
          className="mainMenuLogo__image"
          src={logo}
          alt="logo"
          title="logo"
        />
      </Link>
    </div>
  );
};

export { Logo };
