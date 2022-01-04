import React, {useContext, useState, useEffect} from 'react'
import {NameContext} from '../App';
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar';

export default function HomePage() {

    const {
        firstName, 
        lastName,
        myData
    } = useContext(NameContext)

    const [post, setPostList] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("crm")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        fetch(url, {
            method: "GET",
            headers: headers
        })
        .then(res => res.json())
        .then(data => setPostList(data.results))
    }

    return (
        <div className="container">
            <h2 className="header text-center">Home Page</h2>
            <Navbar/>
            <div className="row" >
                <div className="col text-center">
                    <h3>Welcome</h3>
                    <p>{firstName} {lastName}</p>
                    <p>{myData.email}</p>
                </div>
                <div>
                <h3>Customer List</h3>
                <p>Click on the customers name to get the full information where you also can delete or change the customers information.</p>
                <div className="col">
                <table className="table table-light table-hover border border-secondary border-2">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Reference</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post && post.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                    <th scope="row">{++index}</th>
                                    <td><Link to={`/${item.id}`} className="link-dark"> <h3>{item.name} </h3></Link></td>
                                    <td>{item.reference}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                 </div>
                </div>
            </div>
        </div>
    )
}
