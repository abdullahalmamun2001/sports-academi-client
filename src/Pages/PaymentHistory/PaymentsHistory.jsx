import { useState } from "react";
import { useEffect } from "react";


const PaymentsHistory = () => {
   const [payment,setPayment]=useState([])
   useEffect(()=>{
    fetch('https://academy-sports-abdullahalmamun2001.vercel.app/paymentshistory')
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        setPayment(data);

    })
   },[])
    return (
        <div>
            

<div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                  <thead>
                    <tr>
                      <th>#</th> 
                      <td>Class Name</td> 
                      <td>Email</td> 
                      <td>transaction ID</td> 
                      <td>Time</td> 
                      
                    </tr>
                  </thead> 
                  <tbody>
                  {
                payment.map((pay,index)=><tr key={pay._id}>
                    <th>{index+1}</th> 
                    <td>{pay.className}</td> 
                    <td>{pay.email}</td> 
                    <td>{pay.transactionId}</td> 
                    <td>{pay.time}</td> 
                    
                  </tr>)
            }
                   
                    
                  </tbody> 
                  
                </table>
              </div>
        </div>
    );
};

export default PaymentsHistory;