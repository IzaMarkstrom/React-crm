import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 p-2 rounded-3">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active fs-3" aria-current="page" href="#"><Link className="navText" to="/home">Home</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link active fs-3" aria-current="page" href="#"><Link className="navText" to="/create-customer">Create Customer</Link></a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}
