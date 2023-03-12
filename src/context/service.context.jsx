import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase";

export const ServiceContext = createContext({
    services: [],
    setServices: () => null,
});


export const ServiceProvider = ({ children }) => {
    const [service, setServices] = useState([]);
    const value = {service, setServices};

    // useEffect(() => {
    //     addCollectionAndDocuments()
    // }, []);

    return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
}