import { useQuery } from "@tanstack/react-query";


const InstructorClass = () => {
    const { data: instructor = [], refetch,} = useQuery(['instructor'], async () => {
        const res = await fetch('http://localhost:5000/class')
        return res.json();
      })
    return (
        <div>
            {
                instructor.map(singleInstructor=><p key={singleInstructor._id}>{singleInstructor._id}</p>)
            }
        </div>
    );
};

export default InstructorClass;