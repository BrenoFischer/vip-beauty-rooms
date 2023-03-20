import { createContext, useState, useEffect } from "react";

import { getServicesAndDocuments } from "../utils/firebase";

export const ServicesContext = createContext({
    services: [],
    setServices: () => null,
});


export const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const value = {services, setServices};

    useEffect(() => {
        async function fetchServices() {
            const allServices = await getServicesAndDocuments();
        
            setServices(allServices);
        }
        
        fetchServices();
    }, [services]);

    return <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>
}