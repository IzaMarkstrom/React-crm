import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function CustomerCreate() {
    const [name, setName] = useState("")
    const [organisationNr, setOrganisationNr] = useState("")
    const [vatNr, setVatNr] = useState("")
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebsite] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [response, setResponse] = useState(null)

    const navigate = useNavigate()

    function renderInput(type, value, setValue, placeholder) {
        return (
            <input 
                type={type} 
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }

    function handleOnSubmit(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("crm")
        const payload = {
            name,
            organisationNr,
            vatNr,
            reference,
            paymentTerm,
            website,
            email,
            phoneNumber
        }
        fetch(url, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => setResponse(data))
        .then(navigate("/home"))
    }

    return (
        <div>
            <h3>Create New Customer</h3>
            <form onSubmit={handleOnSubmit}>
                {renderInput("text", name, setName, "Name")}
                {renderInput("text", organisationNr, setOrganisationNr, "Organisation Number")}
                {renderInput("text", vatNr, setVatNr, "Vat Number")}
                {renderInput("text", reference,  setReference, "Reference")}  
                {renderInput("text", paymentTerm, setPaymentTerm, "Payment Term")}
                {renderInput("text", website, setWebsite, "Website")}
                {renderInput("text", email, setEmail, "Email")}
                {renderInput("tel", phoneNumber, setPhoneNumber, "Phone number")}
                <Button type="submit">Create Customer</Button>
            </form>
        </div>
    )
}
