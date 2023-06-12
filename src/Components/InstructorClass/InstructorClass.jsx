import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const InstructorClass = () => {
    const { data: instructor = [],  } = useQuery(['instructor'], async () => {
        const res = await fetch('https://academy-sports-abdullahalmamun2001.vercel.app/class')
        return res.json();
    })
    return (
        <div>
            <div className="overflow-x-auto bg-red-400">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Instructor Email</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            instructor.map((singleInstructor,index)=><tr key={singleInstructor._id}>
                                
                               <td>{index+1}</td>
                                <td>
                                   {singleInstructor.name}
                                </td>
                                <td>{singleInstructor.instructorName}</td>
                                <th>{singleInstructor.price}</th>
                                <th>{singleInstructor.email}</th>
                                <th>
                                   <Link to={`/dashboard/update/${singleInstructor._id}`}><button  className="btn btn-ghost btn-xs">Update</button></Link>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default InstructorClass;