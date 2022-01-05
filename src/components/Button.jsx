import React from 'react'
import styled from "styled-components";

const GreyButton = styled.button`
    background: #c1c1c1; 
    border-radius: 5px;
    border: none;
    color: white;
    padding: 7px;
    margin-top: 10px;
    font-weight: 600;
    
    :hover {
        box-shadow: 5px 5px 5px black;
    }
`

const RedButton = styled(GreyButton)`
    background: red;
    margin-right: 40px;
`

export default function Button(props) {
    return (
        <>
        {props.red ? 
            <RedButton {...props}></RedButton>
            : <GreyButton {...props}></GreyButton>
        }   
        </>
    )
}
