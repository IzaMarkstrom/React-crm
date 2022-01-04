import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import {Routes, Route} from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { createContext, useState, useEffect } from 'react'
import CreateCustomerPage from "./pages/CreateCustomerPage";

const NameContext = createContext({})

function App() {
  const [myData, setMyData] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
      const url = "https://frebi.willandskill.eu/api/v1/me"
      const token = localStorage.getItem("crm")
      const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
      fetch(url, {
          method: "GET",
          headers: headers,
      })
      .then(res => res.json())
      .then(data => {
          setMyData(data)
          setFirstName(data.firstName)
          setLastName(data.lastName)
      })

  }, [])

  return (
    <NameContext.Provider value={{firstName, lastName, myData}}>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/:id" element={<DetailPage/>} />
          <Route path="/create-customer" element={<CreateCustomerPage/>} />
        </Routes>
      </div>
    </NameContext.Provider>
  );
}

export {NameContext}
export default App;
