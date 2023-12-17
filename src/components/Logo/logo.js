import { NavLink } from "react-router-dom";
import "./style.scss";

export const Logo = () => {
  return (
    <NavLink className="logo" to={"/"}>
      <img src="./../../logo192.png" alt="Logo"></img>
    </NavLink>
  );
};
