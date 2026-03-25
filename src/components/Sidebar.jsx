import { useState } from "react";
import logo from "../assets/logo.png"; // твоє лого onlycats
import paw from "../assets/paw.png";   // іконка лапки

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  const menu = ["Home", "Map", "LeaderBoard", "My cats", "Profile"];

  return (
    <div className="sidebar">
     <div className="logo">
        <img src={paw} alt="Paw Icon" className="paw-img" />
        <img src={logo} alt="OnlyCats Logo" className="logo-img" />
     </div>

      <ul className="menu">
        {menu.map((item) => (
          <li
            key={item}
            className={active === item ? "menu-item active" : "menu-item"}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}