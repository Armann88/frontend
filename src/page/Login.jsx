import React from "react";
import {Link, Navigate} from 'react-router-dom';
import axios from "../axios";
import { useAuth } from "../context/AuthContext";

export default function Login(){
    const {setUser, csrfToken} = useAuth();
    const [error,setError] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDeafult();
        const body = {
            email:email.value,
            password:password.value,
        };
        await csrfToken();
        try {
            
        } catch (error) {
            
        }
    }
}