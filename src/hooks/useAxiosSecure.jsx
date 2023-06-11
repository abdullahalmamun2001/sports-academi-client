import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () =>{
    const navigate = useNavigate()
const {logOut} = useContext(AuthContext)
    useEffect(()=>{
        axiosSecure.interceptors.request.use(config =>{
            const token = `Bearer ${localStorage.getItem('access-token')}`
            if(token){
                config.headers.authorization = token;
            }
            return config
        })
        axiosSecure.interceptors.response.use(response =>response, async(error)=>{
            if((error.response && error.response.status === '401') || (error.response.status === '403')){
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        })
    },[logOut, navigate])

    return [axiosSecure]
}

export default useAxiosSecure;