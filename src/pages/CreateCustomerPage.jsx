import React from 'react'
import CustomerCreate from '../components/CustomerCreate'
import Navbar from '../components/Navbar'

export default function CreateCustomerPage() {
    return (
        <div className="container ">
            <h2 className="header text-center">Home Page</h2>
            <Navbar/>
            <div className="col-9">
                <CustomerCreate/>
            </div>
        </div>
    )
}
