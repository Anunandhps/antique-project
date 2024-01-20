import "../category/all.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



export default function Furniture() {
    const navigate = useNavigate()

  const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/jewelryview').then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);
  return (
  
    <div><div className="cardcollection">
         {state[0] ?
            <>

              {state?.map((data) => (
    
        <div className="singlecard">
            <img src={`/antiquestore/${data.image}`} alt="" className="imagesec" />
            <div className="headingsec">{data.name}</div>
            <div className="parasec">Price :{data.price} </div>
            <div className="parasec">{data.description}</div>
            <div className="viewsec">

            <a href="" className='btn'><i class='bx bx-cart-add'  onClick={()=>{navigate(`/booking/${data.id}`)}}></i></a>
            <a href="" className='btn'><i class='bx bxs-star'></i></a>
               

            </div>



        </div>
        
        ))}

        </>
        : <td>data added</td>
      }
         
    </div>


</div>
  )
}

   
