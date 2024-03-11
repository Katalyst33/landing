"use client";
import React, {useEffect} from 'react';
import AdminLayout from "../../layouts/admin-layouts";
import ServiceTable from "../service/ServiceTable";

function ServicesIndex() {

    const [services, setServices] = React.useState([]);


    useEffect(() => {

        fetch(`${process.env.apiUrl}/services`)
            .then((response) => response.json())
            .then((data) =>



                setServices(data)


            )
            .catch((error) => console.error(error));
    }, []);


    return (
        <div>ServicesIndex
        <ServiceTable data={services}/>
        </div>
    )
}

export default ServicesIndex;


ServicesIndex.layout = AdminLayout


