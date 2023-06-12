// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";

// import useAxiosSecure from "./useAxiosSecure";
// import { AuthContext } from "../Provider/AuthProvider";




// const useAdminSecure = () => {
//     const {user, loader} = useContext(AuthContext)
//     const [axiosSecure] = useAxiosSecure()

//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey:['isAdmin', user?.email],
//         enabled: !loader,
//         queryFn: async () =>{
//             const res = await axiosSecure.get(`/user/admin/${user?.email}`);
//                 return res.data.admin;
//         }
        
//     })

//     return [isAdmin, isAdminLoading];
// };

// export default useAdminSecure;


    