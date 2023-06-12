import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const UpdateIns = () => {
    const data = useLoaderData()
    console.log(data._id);
    console.log(data.name);
    const {_id}=data;
    console.log(_id);
    console.log(_id);
    const {user}=useContext(AuthContext)
    const handleForm=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const sit = form.sit.value;
        
        const instructorName = user?.displayName;
        const email = user?.email;
        console.log(name, price, sit, email,instructorName);

        const updateClass={name,price,email,instructorName,sit}

        fetch(`https://academy-sports-abdullahalmamun2001.vercel.app/update/${data._id}`,{
            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(updateClass)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div>
            <div>
                <div className="w-full px-10">

                    <form onSubmit={handleForm}>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Class Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Class Name"

                                className="input input-bordered w-full " />
                        </div>
                        <div className="flex my-4">

                            <div className="form-control w-full ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            
                            <div className="form-control w-full ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Available sit</span>
                                </label>
                                <input type="number" name="sit" placeholder="Sit " className="input input-bordered w-full " />
                            </div>
                        </div>

                      
                        <button className="btn btn-secondary">Update Class</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateIns;

// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";

// const image_hosting = import.meta.env.VITE_Image_Token;
// const AddClass = () => {
//     const { user } = useContext(AuthContext)
//     const handleForm = (event) => {
//         const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const price = form.price.value;
//         const sit = form.sit.value;
//         const image = form.image.files[0];
//         const instructorName = user?.displayName;
//         const email = user?.email;
//         console.log(name, price, sit, email, image.instructorName);
//         // const newForm = { name, price, sit, email, image, instructorName };
//         const formData = new FormData();
//         formData.append('image', image)
//         fetch(image_hosting_url, {
//             method: 'POST',
//             body: formData
//         })
//             .then(res => res.json())
//             .then(imageRes => {
//                 console.log(imageRes);
//                 if (imageRes.success) {
//                     //Class name
//                     // Class Image
//                     // Instructor name (read-only) (use the displayName value of logged in user/instructor)
//                     // Instructor email (read-only) (use the email value of logged in user/instructor)
//                     // Available seats
//                     // Price
//                     // Add button
//                     const imageURL = imageRes.data.display_url
//                     const newForm = { name, price: parseFloat(price), sit: parseInt(sit), email, image: imageURL, instructorName };
//                     fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/class', {
//                         method: "POST",
//                         headers: {
//                             'content-type': "application/json",

//                         },
//                         body: JSON.stringify(newForm)
//                     })
//                         .then(res => res.json())
//                         .then(data => {
//                             console.log(data)
//                             if (data.insertedId) {
//                                 Swal.fire({
//                                     position: "top-center",
//                                     icon: 'success',
//                                     title: 'Your class is added',
//                                     showConfirmButton: false,
//                                     timer: 1500
//                                 })
//                             }
//                         })
//                 }
//             })



//     }
//     console.log(image_hosting);
//     return (
//         <div>
//             <div className="w-full px-10">

//                 <form onSubmit={handleForm}>
//                     <div className="form-control w-full mb-4">
//                         <label className="label">
//                             <span className="label-text font-semibold">Class Name*</span>
//                         </label>
//                         <input type="text" name="name" placeholder="Class Name"

//                             className="input input-bordered w-full " />
//                     </div>
//                     <div className="flex my-4">

//                         <div className="form-control w-full ml-4">
//                             <label className="label">
//                                 <span className="label-text font-semibold">Price</span>
//                             </label>
//                             <input type="number" name="price" placeholder="Type here" className="input input-bordered w-full " />
//                         </div>
//                         <div className="form-control w-full ml-4">
//                             <label className="label">
//                                 <span className="label-text font-semibold">Available sit</span>
//                             </label>
//                             <input type="number" name="sit" placeholder="Type here" className="input input-bordered w-full " />
//                         </div>
//                     </div>

//                     <div className="form-control w-full my-4">
//                         <label className="label">
//                             <span className="label-text">Class Image</span>
//                         </label>
//                         <input type="file" name="image" className="file-input file-input-bordered w-full " />
//                     </div>
//                     <button className="btn btn-secondary">Add Item</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddClass;