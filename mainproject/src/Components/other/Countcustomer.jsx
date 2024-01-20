import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalCustomersComponent = () => {
    const [totalCustomers, setTotalCustomers] =  useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/TotalCustomersView').then((response) => {
            console.log(response);
            setTotalCustomers(response.data.data)

        }).catch((error) => { console.log(error); })
    }, []);

    return (
        <div>
            <h2>Total Customers: {totalCustomers}</h2>
        </div>
    );
};

export default TotalCustomersComponent