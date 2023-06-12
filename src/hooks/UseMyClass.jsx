import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UseMyClass = () => {
    const {user}=useContext(AuthContext)
    const { data: myClasses = [], refetch,isLoading:loading } = useQuery({
        queryKey: ['purchase'],
        queryFn: async() =>{
            const res= await fetch(`https://academy-sports-abdullahalmamun2001.vercel.app/purchase?email=${user?.email}`)
            return res.json()
        }
            
                
    })
    return [myClasses,refetch,loading]
};

export default UseMyClass;