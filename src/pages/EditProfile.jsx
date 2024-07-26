import { Outlet, NavLink } from "react-router-dom";

const EditProfile = () => {
    return (
        <div className="p-6 pt-1">
            <div className="flex justify-center">
                <ul className="flex bg-blue-300 p-6 px-2 rounded-full gap-4 w-fit">
                    <li>
                        <NavLink
                            to="basic"
                            className={({ isActive }) =>
                                `p-4 rounded-full font-medium text-base cursor-pointer ${
                                    isActive ? "bg-blue-500 text-white" : ""
                                }`
                            }
                        >
                            Basic Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="contact"
                            className={({ isActive }) =>
                                `p-4 rounded-full font-medium text-base cursor-pointer ${
                                    isActive ? "bg-blue-500 text-white" : ""
                                }`
                            }
                        >
                            Contact Details
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Render content based on active tab */}
            <div className="mt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default EditProfile;
