import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";


const Class = () => {
    // const [clas,setClas]=useState([])
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`http://localhost:5000/classes?status=${'approve'}`);
        return res.json();
      })
      const approve=classes.filter(item=>item.status=="approve")
      console.log(typeof approve);

    const handlePurchaseClass=(item)=>{
        const name=item.name
        const instructorName=item.instructorName;
        const email=item.email;
        const status=item.status;
        const price=item.price;
        const sit=item.sit;
        // const id=item._id;
        const addClass={name,instructorName,email,status,price,sit}
        
        fetch('http://localhost:5000/purchase',{
            method:"POST",
            headers:{
              'content-type':"application/json",
    
            },
            body:JSON.stringify(addClass)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
          })
    }
    // const handlePost=()
    return (
        <div className="grid md:grid-cols-3 gap-4">
           {
            approve.map(product=><div key={product._id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.name?product.name:'NOT FOUND NAME'}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Instructor Name :{product.instructorName}</p>
              <p>Instructor email :{product.email}</p>
              <div className="card-actions justify-end">
                <button onClick={()=>handlePurchaseClass(product)} className="btn btn-secondary">Purchase</button>
              </div>
            </div>
          </div>)
           }
        </div>
    );
};

export default Class;