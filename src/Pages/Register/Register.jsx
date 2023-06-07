// import { useForm } from "react-hook-form";

import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

// import { saveUSer } from '../../api/seveUser';


// const Register = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const handleRegister=(event)=>{
//         event.preventDefault()
//         const form=event.target;
//         const name=form.name.value;
//         const password=form.password.value;
//         const email=form.email.value;
//         const obj={name,password,email}
//         console.log(obj);
//     }
//     return (
//         <>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     {/* <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div> */}
//                     <form onSubmit={handleSubmit(handleRegister)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" {...register("password", { required: true, maxLength: 20,minLength:6,pattern: /^[A-Za-z]+$/i})} placeholder="password" className="input input-bordered" />
//                                 {errors.password?.type === 'required' && <p className="text-red-600">First name is required</p>}
//                                 <label className="label">
//                                     <a href="#" className="label-text-altNavLinkNavLink-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div></>
//     );
// };

// export default Register;
const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        const email=data.email
        const password=data.password
        createUser(email,password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
                // saveUSer(loggedUser)
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'Register successfully.',
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                navigate('/');
                // reset();
                
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();



                    })

            })
            .catch(error => {
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    
                })
            })
        
    };

    return (
        <>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-altNavLinkNavLink-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p><small>Already have an account <NavLink to="/login">Login</NavLink></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;