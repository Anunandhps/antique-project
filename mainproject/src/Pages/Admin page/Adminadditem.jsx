
import '../Admin page/Adminadditem.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Adminadditem() {
    const Navigate = useNavigate()

    const [input, setinput] = useState({



    })



    const inputchange = (event) => {
        const { name, value } = event.target
        setinput({ ...input, [name]: value })


    }
    console.log(input);

    const dataadd = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', input.image)
        formData.append('name', input.name)
        formData.append('price', input.price)
        formData.append('description', input.description)
        formData.append('category', input.category)




        axios.post('http://127.0.0.1:8000/api/additem', formData).then((res) => {
            console.log(res);
            Navigate('/admin')


        }).catch((err) => {
            console.log(err);
        })
        console.log(input)





    }



    return (
        <div><center>
            <div class="form-style-2">
                <div class="form-style-2-heading">Add Item</div>
                <form action="" method="post">
                    <label for="field0"><span>Photo <span class="required">*</span></span><input type="file" class="input-field" name="field0" value="" onChange={(e) => setinput({ ...input, image: e.target.files[0] })} /></label>
                    <label for="field1">
                        <span>Name <span class="required">*</span></span>
                        <input type="text" class="input-field" name="name" value={input.name || ''} onChange={inputchange} />
                    </label>
                    <label for="field2">
                        <span>Price <span class="required">*</span></span>
                        <input type="text" class="input-field" name="price" value={input.price || ''} onChange={inputchange} />
                    </label>
                    

                    <label for="field4"><span>Catagory</span><select name="category" value={input.category || ''} onChange={inputchange}  class="select-field" required>
                        <option  >Select</option>
                        <option  >Paintings</option>
                        <option  >Jewelry</option>
                        <option >Decorative</option>
                        <option   >Instruments</option>
                    </select></label>
                    <label for="field2">
                        <span>Description <span class="required">*</span></span>
                        <input type="text" class="input-field" name="description" value={input.description || ''} onChange={inputchange} />
                    </label>

                    <label><span> </span><input type="submit" value="Submit" onClick={dataadd} /></label>
                </form>
            </div>
        </center>
        </div>
    )
}
