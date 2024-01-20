
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export default function Itemedit() {

    const {id}=useParams();
  console.log(id)
  const [form, setform] = useState({})
  const [update, setupdate] = useState({})


  const inputchange=(event)=>{
    const{name,value}=event.target
    setform({...form,[name]:value})
    setupdate({...update,[name]:value})
  }
  console.log(update);

useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/api/singleitemview/${id}`).then((response) => {
    console.log("ther is nothing",response);
    setform(response.data.data)
    // console.log(form);

}).catch((err) => {
  console.log(err);
})
}, [])


const navigate=useNavigate()
// --------
const change =(e)=>{
  e.preventDefault()
  axios.put(`http://127.0.0.1:8000/api/updatesingleitem/${id}`,update,).then((response)=>{

    console.log(response);
    navigate('/admin')
  })
}
  return (
    <div><center>
    <div class="form-style-2">
        <div class="form-style-2-heading">Add Item</div>
        <form action="" method="post">
            <label for="field0"><span>Photo <span class="required">*</span></span><input type="file" class="input-field" name="field0" value=""  onChange={inputchange} /></label>
            <label for="field1">
                <span>Name <span class="required">*</span></span>
                <input type="text" class="input-field" name="name"  onChange={inputchange} />
            </label>
            <label for="field2">
                <span>Price <span class="required">*</span></span>
                <input type="text" class="input-field" name="price"  onChange={inputchange} />
            </label>
            

            <label for="field4"><span>Catagory</span><select name="category" onChange={inputchange}  class="select-field" required>
                <option  >Select</option>
                <option  >Paintings</option>
                <option  >Jewelry</option>
                <option >Decorative</option>
                <option   >Instruments</option>
            </select></label>
            <label for="field2">
                <span>Description <span class="required">*</span></span>
                <input type="text" class="input-field" name="description"  onChange={inputchange} />
            </label>

            <label><span> </span><input type="submit" value="Submit" onClick={change} /></label>
        </form>
    </div>
</center>
</div>
  )
}
