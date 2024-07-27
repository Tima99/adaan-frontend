/* eslint-disable react/prop-types */
import GodFatherLogo from "../../assets/the-godfather.svg";
import { FiEdit } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { useContext } from "react";
import { DesignContext } from "../../contexts/DesignIndexContext";
import { Link, Outlet } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NavLayout = () => {
  const { designIndex, handleToggle } = useContext(DesignContext);

  return (
    <div className="container mx-auto p-5 pt-0">
      <div className="flex justify-between mb-4 sticky top-0 bg-white">
        <Link to="/" className="max-w-16">
          <img src={GodFatherLogo} alt="" />
        </Link>

        <div className="flex gap-6">
          <button title={"Home"} className="text-[1.75rem]">
            <Link to="/">
              <FiHome />
            </Link>
          </button>

          <button title={"Edit Profile"} className="text-[1.75rem]">
            <Link to={"/edit/basic"}>
              <FiEdit />
            </Link>
          </button>

          <button
            onClick={handleToggle}
            title={"Toggle Layout"}
            className="text-3xl relative"
          >
            <span className="text-xs absolute top-1 -right-4 bg-blue-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
              <span className="w-6 h-6 bg-blue-300 -z-10 absolute rounded-full animate-ping"></span>
              {designIndex + 1}
            </span>
            <LuLayoutDashboard />
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavLayout;
