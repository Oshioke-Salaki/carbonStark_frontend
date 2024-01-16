/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function SidebarItem({ logo, title, to }) {
  return (
    <NavLink to={to}>
      <div className="py-[18px] text-white text-lg w-[233px] font-semibold rounded-[50px] px-[26px] flex items-center gap-x-4">
        <img src={logo} className="w-5 h-5" alt="" />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default SidebarItem;
