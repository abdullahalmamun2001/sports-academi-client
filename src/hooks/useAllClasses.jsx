import { useQuery } from '@tanstack/react-query';


const useAllClasses = () => {
    const { data: classes = [], refetch,isLoading:loading } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/class')
        return res.json();
      })
    
    return [classes,refetch,loading]
};

export default useAllClasses;