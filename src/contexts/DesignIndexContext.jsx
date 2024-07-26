/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
    const [designIndex, setDesignIndex] = useState(0);
    const totalDesigns = 3;

    const handleToggle = () => {
        setDesignIndex((designIndex + 1) % totalDesigns);
    };

    return (
        <DesignContext.Provider value={{ designIndex, handleToggle }}>
            {children}
        </DesignContext.Provider>
    );
};
