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
    // <section>
    //     <div>
    //         <form action="#"
    //         method="post"
    //         onSubmit={handleSubmit}>
    //             <label htmlFor="image"></label>
    //             <input type="file" 
    //             name="image"
    //             id="image"/>
    //         </form>
    //         {imageError && (
    //             <p className="hfghgfj">{imageError}</p>
    //         )}
    //     </div>
    //     <button type="submit"> </button>
    //     {/* confirm password */}
    //     <button>
    //         <p>alread have acaunt{''}
    //         <Link to='/'>
    //             login heare
    //         </Link>
    //         </p>
    //     </button>
    // </section>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" method="post" onSubmit={handleSubmit}>
              <div>
                      <label htmlFor="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your image</label>
                      <input type="file" name="image" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                      {imageError && (
                <p className="error">{imageError}</p>
            )}
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                      {emailError && (
                <p className="error">{emailError}</p>
            )}
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      {passwordError && (
                <p className="error">{passwordError}</p>
            )}
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <p>alread have acaunt{""}
                    <Link to="/">
                    login heare
                    </Link>
                    </p>
                    </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>




    );
}