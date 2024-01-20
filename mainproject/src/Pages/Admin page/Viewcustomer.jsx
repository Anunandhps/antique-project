import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import "../Admin page/viewcustomer.css"


export default function Viewcustomer() {
    const navigate = useNavigate()



    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/customerview').then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);
    return (
        <div><table class="styled-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fullname</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {state[0] ?
                    <>

                        {state.map((data, index) => (
                            <tr key={index} className='active-row'>
                                <th scope="row">{index + 1}</th>
                                <td>{data.fullname}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.username}</td>

                            </tr>



                        ))}

                    </>
                    : <td>data added</td>
                }
            </tbody>
        </table></div>
    )
}
