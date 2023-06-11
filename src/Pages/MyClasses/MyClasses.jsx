// import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UseMyClass from "../../hooks/UseMyClass";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";


// const [myClass, setMyClass] = useState([])
// axios.get('http://localhost:5000/purchase')
//     .then(data => {
//         setMyClass(data.data)

//     })

const MyClasses = () => {
    const [myClasses, refetch, loading] = UseMyClass();
    if (loading) {
        return <progress className="w-40"></progress>
    }

    // const { data: myClass = [], refetch } = useQuery({
    //     queryKey: ['purchase'],
    //     queryFn: () =>
    //         fetch('http://localhost:5000/purchase')
    //             .then(res => res.json()),
    // })
    const handleDeleteButton = (id) => {
        fetch(`http://localhost:5000/purchase/${id}`, {
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
                                {/* <th>
                                    <div>
                                        <label htmlFor="my_modal_7" onClick={()=>{singleClass._id}} className="btn btn-xs bg-orange-400"> Send feedback</label>

                                        Put this part before </body> tag
                                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                        <div className="modal">
                                            <form className="modal-box">
                                                <h3 className="text-lg font-bold">{singleClass.email}</h3>
                                                <textarea name='feedback' placeholder="Write you " className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                                                <input type="submit" className='block px-5 py-3  bg-green-800 text-white rounded-md hover:bg-green-600' />
                                            </form>
                                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                        </div>

                                    </div>
                                </th> */}
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