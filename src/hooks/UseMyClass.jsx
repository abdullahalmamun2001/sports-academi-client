import { useQuery } from "@tanstack/react-query";


const UseMyClass = () => {
    const { data: myClasses = [], refetch,isLoading:loading } = useQuery({
        queryKey: ['purchase'],
        queryFn: async() =>{
            const res= await fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/purchase')
            return res.json()
        }
            
                
    })
    return [myClasses,refetch,loading]
};

export default UseMyClass;