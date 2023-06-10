import axios from "axios";
import { useState } from "react";


// const [myClass, setMyClass] = useState([])
// axios.get('http://localhost:5000/purchase')
//     .then(data => {
//         setMyClass(data.data)

//     })

const MyClasses = () => {
    const {} = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
            (res) => res.json(),
          ),
      })
const handleDeleteButton=(id)=>{
    fetch(`http://localhost:5000/purchase/${id}`,{
        method:"DELETE",
     })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>#</th>
                            <th>image</th>
                            <th>instructorName</th>
                            <th>Available Sit</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myClass.map((singleClass,index)=><tr key={singleClass._id}>
                            <td>{index+1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={singleClass.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{singleClass.name}</div>
                                        <div className="text-sm opacity-50">{singleClass.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {singleClass.instructorName}
                            </td>
                            <td>{singleClass.sit}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                            <th>
                                <button onClick={()=>{handleDeleteButton(singleClass._id)}} className="btn btn-primary btn-xs">Pay</button>
                            </th>
                        </tr>)
                       }
                        
                        
                        
                       
                    </tbody>
                    

                </table>
            </div>
        </>
    );
};

export default MyClasses;