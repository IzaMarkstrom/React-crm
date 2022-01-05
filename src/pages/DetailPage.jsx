import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Button from '../components/Button';
import Navbar from '../components/Navbar';


export default function DetailPage() {
    const params = useParams()
    const id = params.id

    const navigate = useNavigate();

    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
    const token = localStorage.getItem("crm")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    
    const [post, setPostList] = useState(null)

    useEffect(() => {
        fetch(url, {
            headers: headers
        })
        .then(res => res.json())
        .then(data => setPostList(data)) // SKA INTE VARA data.results
    }, [])





    // function checkCustomerList() {
    //     if (post) {
    //        for(let i = 0; i < post.length; i++){
    //            if(post[i].id == id) {
    //                return post[i]
    //            }
    //        }
    //       }
    //    }
   
    // const customer = checkCustomerList()

    function handleOnDelete() {
        fetch(url, {
          method: "DELETE",
          headers: headers,
        })
        .then((res) => navigate("/home"));
      }

    return (
        <div className="container text-center">
            <h2 className="header text-center">Detail Page</h2>
            <Navbar/>
            <div className="col">
                {post && (
                    <>
                    {console.log(id)}
                         <p>Customer information about {post.name}:</p>
            
                         <table className="table table-light table-hover border border-secondary border-2">
                             <thead>
                                 <tr>
                                 <th scope="col">Customer</th>
                                 <th scope="col">Reference</th>
                                 <th scope="col">Email</th>
                                 <th scope="col">Phone</th>
                                 <th scope="col">Website</th>
                                 <th scope="col">ID</th>
                                 <th scope="col">Organisation nr</th>
                                 <th scope="col">VAT</th>
                                 <th scope="col">Payment term</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td><h5>{post.name}</h5></td>
                                     <td><h5>{post.reference}</h5> </td>
                                     <td>{post.email}</td>
                                     <td>{post.phoneNumber}</td>
                                     <td>{post.website}</td>
                                     <td>{post.id}</td>
                                     <td>{post.organisationNr}</td>
                                     <td>{post.vatNr}</td>
                                     <td>{post.paymentTerm}</td>
                                     </tr>
                             </tbody>
                         </table>
                         </>
                )}
                <Button onClick={handleOnDelete} red={true}>Delete customer</Button>
                <Button>Change Information</Button>
            </div>
        </div>
    )
}
