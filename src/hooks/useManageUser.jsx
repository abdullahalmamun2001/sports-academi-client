import { useQuery } from "@tanstack/react-query";


const useManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/user')
        return res.json();
      })
    return [users,refetch]
};

export default useManageUser;