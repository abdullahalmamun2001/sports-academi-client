import { useQuery } from '@tanstack/react-query';


const useAllClasses = () => {
    const { data: classes = [], refetch,isLoading:loading } = useQuery(['classes'], async () => {
        const res = await fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/class')
        return res.json();
      })
    
    return [classes,refetch,loading]
};

export default useAllClasses;