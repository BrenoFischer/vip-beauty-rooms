import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase";

import SERVICES from "../servicesData.js";

export const ServiceContext = createContext({
    services: [],
    setServices: () => null,
});


export const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState(SERVICES);
    const value = {services, setServices};

    // useEffect(() => {
    //     addCollectionAndDocuments()
    //     setServices(SERVICES);
    // }, []);

    return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
}