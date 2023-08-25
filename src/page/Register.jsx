import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "../axios";
import { useAuth } from "../context/AuthContext";

export default function Register(){
    const {setUser} = useAuth();
    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [imageError,setImageError] = useState(""); //.raect
    const [passwordError,setPasswordError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault(); // arnc ref func
        const {name,email,image,password,cpassword} = e.target.elements;
        const body = {
            name:name.value,
            email:email.value,
            iamge:image.file[0],
            password:password.value,
            password_confirmation:cpassword.value,
        }
        await csrfToken();
        try {
            const resp = await axios.post("/register",body);
            if(resp.status === 200){
                setUser(resp.data.user);
                return <Navigate to="/profile"/>
            }
        } catch (error) {
            if(error.response.status === 422){
                console.log(error.response.data.errors);
                if (error.response.data.errors.name) {
                    setNameError(error.response.data.errors.name[0]);
                }else{
                    setNameError("");
                }
                if (error.response.data.errors.email) {
                    setEmailError(error.response.data.errors.email[0]);
                }else{
                    setEmailError("");
                }
                if (error.response.data.errors.password) {
                    setPasswordError(error.response.data.errors.password[0]);
                }else{
                    setPasswordError("");
                }
            }
        }
          
        
            }
    return(
    <section>
        <div>
            <form action="#"
            method="post"
            onSubmit={handleSubmit}>
                <label htmlFor="image"></label>
                <input type="file" 
                name="image"
                id="image"/>
            </form>
            {imageError && (
                <p className="hfghgfj">{imageError}</p>
            )}
        </div>
        <button type="submit"> </button>
        {/* confirm password */}
        <button>
            <p>alread have acaunt{''}
            <Link to='/'>
                login heare
            </Link>
            </p>
        </button>
    </section>
    );
}