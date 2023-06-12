import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";





const useInstructorSecure = () => {
    const {user, loader} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        enabled: !loader,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
                return res.data.instructor;
        }
        
    })

    return [isInstructor, isInstructorLoading];
};

export default useInstructorSecure;