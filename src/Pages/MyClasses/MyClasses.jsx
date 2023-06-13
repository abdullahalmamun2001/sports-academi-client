// import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UseMyClass from "../../hooks/UseMyClass";


const MyClasses = () => {
    const [myClasses, refetch, loading] = UseMyClass();
    if (loading) {
        return <progress className="w-40"></progress>
    }

   
    const handleDeleteButton = (id) => {
        fetch(`https://academy-sports-abdullahalmamun2001.vercel.app/purchase/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    return (
        <>
            <div className="overflow-x-auto bg-yellow-300 text-black">
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
                            myClasses.map((singleClass, index) => <tr key={singleClass._id}>
                                <td>{index + 1}</td>
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
                                    <button onClick={() => { handleDeleteButton(singleClass._id) }} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                                
                                <th>
                                    <Link to={`/dashboard/payment/${singleClass._id}`} ><button className="btn btn-primary btn-xs">Pay</button></Link>
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