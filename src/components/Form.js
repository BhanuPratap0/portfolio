import React, { useEffect, useState } from 'react'
import axios from "axios"

const Form = () => {

    const getImage = async () => {
        const response = await fetch(`http://localhost:5000/api/notes/getimage`, {
            method: "GET",
            headers: {
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3OGMyZjZiNjRhOWIyZGZkMDhiYzYwIn0sImlhdCI6MTcwMjQ1NDI2MH0.g8xeYwlPrz5kALOXOhFE57eJ3hParIQyCpXDv58cRFU"
            }
        });
        const result = await response.json();
        console.log(result);
        setAllimage(result.data);
    }

    useEffect(() => {
        getImage();
    }, [])
    const [image, setImage] = useState();
    const [allimage, setAllimage] = useState(null);
    const [credential, setCredential] = useState({ image: "" })
    const onChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        const response = await fetch(`http://localhost:5000/api/notes/image`, {
            method: "PUT",
            headers: {
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3OGMyZjZiNjRhOWIyZGZkMDhiYzYwIn0sImlhdCI6MTcwMjQ1NDI2MH0.g8xeYwlPrz5kALOXOhFE57eJ3hParIQyCpXDv58cRFU"
            },
            body: formData,
        });
        const result = await response.json();
        console.log(result);
    }

   


    return (
        <div>
            <form onSubmit={onSubmit} >
                <div className="mb-3" style={{ marginTop: "140px" }} >
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" name="image" id="formFile" onChange={onChange} />
                    <button type='submit' >Submit</button>
                </div>
            </form>   
            {/* {allimage==null?"":allimage.map((data,index)=>{
                return (<img src={require(`./images/${data.image}`)}/>)
            })} */}
            {allimage==null?"":<img src={require(`./images/${allimage[allimage.length-1].image}`)} /> }
        </div>
    )
}

export default Form
