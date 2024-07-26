import { useState } from "react";
// import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import Layout1 from "../components/screens/Home/Layout1";
import Layout2 from "../components/screens/Home/Layout2";
import { LuLayoutDashboard } from "react-icons/lu";
import Layout3 from "../components/screens/Home/Layout3";
import GodFatherLogo from "../assets/the-godfather.svg";
import { FiEdit } from "react-icons/fi";

const ToggleComponent = () => {
    const [designIndex, setDesignIndex] = useState(0);
    const totalDesigns = 3;

    const handleToggle = () => {
        setDesignIndex((designIndex + 1) % totalDesigns); // Toggle between 4 designs
    };

    function renderDesign(index) {
        switch (index) {
            case 0:
                return <Layout1 />;
            case 1:
                return <Layout2 />;
            case 2:
                return <Layout3 />;
        }
    }

    return (
        <div className="container mx-auto p-5 pt-0">
            {/* Toggle Button */}
            <div className="flex justify-between mb-4 sticky top-0 bg-white">
                <div className="max-w-16">
                    <img src={GodFatherLogo} alt="" />
                </div>

                <div className="flex gap-6">
                    <button title={"Toggle Layout"} className="text-[1.75rem]">
                        <FiEdit />
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

            {/* Conditionally Render Designs */}
            {renderDesign(designIndex)}
        </div>
    );
};

export default ToggleCom