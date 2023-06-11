import { useQuery } from "@tanstack/react-query";


const useManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/user')
        return res.json();
      })
    return [users,refetch]
};

export default useManageUser;