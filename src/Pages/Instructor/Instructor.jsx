import { useEffect, useState } from "react";


const Instructor = () => {
    const [instructor,setInstructor]=useState([]);
    useEffect(()=>{
        fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/user')
        .then(res=>res.json())
        .then(data=>{
            setInstructor(data);
        })
        console.log(typeof role);
        
    },[])
    const role=instructor.filter(ins=>ins.role=="instructor")
    return (
        <div>
            
            {
                role.map(inst=><div key={inst._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={inst.photo} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{inst._id}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Instructor;