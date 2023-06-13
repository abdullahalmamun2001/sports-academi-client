// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import './CheakOut.css'

// import { useEffect } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useState } from "react";
// import { createContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { toast } from "react-hot-toast";
// // import useAllClasses from "../../hooks/useAllClasses";
// // import { useParams } from "react-router-dom";


// const CheakOut = ({ selectData }) => {
//   const { price } = selectData
//   console.log(selectData);
//   // const data=useParams()
//   // console.log(data);

//   // const [classes]=useAllClasses();
//   // const {price}=classes;
//   // console.log(price);

//   const stripe = useStripe();
//   const elements = useElements()
//   const { user } = createContext(AuthContext)
//   const [clientSecret, setClientSecret] = useState('')
//   const [axiosSecure] = useAxiosSecure();



//   useEffect(() => {
//     if (price > 0) {
//       axiosSecure.post('/create-payment-intent', { price })
//         .then(res => {
//           console.log(res.data.clientSecret)
//           setClientSecret(res.data.clientSecret);
//         })
//     }
//   }, [price, axiosSecure])


//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//         return
//     }

//     const card = elements.getElement(CardElement);
//     if (card === null) {
//         return
//     }

//     const { error } = await stripe.createPaymentMethod({
//         type: 'card',
//         card
//     })

//     if (error) {
//         console.log('error', error)
//         // setCardError(error.message);
//     }
//     else {
//         // setCardError('');
//         // console.log('payment method', paymentMethod)
//     }

//     // setProcessing(true)

//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//         clientSecret,
//         {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     email: user?.email || 'unknown',
//                     name: user?.displayName || 'anonymous'
//                 },
//             },
//         },
//     );

//     if (confirmError) {
//         console.log(confirmError);
//         toast.error(confirmError)
//     }

//     console.log('payment intent', paymentIntent)
//     // setProcessing(false)
//     // if (paymentIntent.status === 'succeeded') {
//     //     setTransactionId(paymentIntent.id);
//     //     // save payment information to the server
//     //     const payment = {
//     //         email: user?.email,
//     //         transactionId: paymentIntent.id,
//     //         price,
//     //         date: new Date(),
//     //         quantity: cart.length,
//     //         cartItems: cart.map(item => item._id),
//     //         menuItems: cart.map(item => item.menuItemId),
//     //         status: 'service pending',
//     //         itemNames: cart.map(item => item.name)
//     //     }
//     //     axiosSecure.post('/payments', payment)
//     //         .then(res => {
//     //             console.log(res.data);
//     //             if (res.data.result.insertedId) {
//     //                 // display confirm
//     //             }
//     //         })
//     // }


// }



//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Price :{price}</p>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               width:"100px",
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );

// };

// export default CheakOut;


// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect } from "react";
// import { useState } from "react";


// import './CheakOut.css'
// import { AuthContext } from "../../Provider/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";


// const CheakOut = ({ selectData }) => {
//   const { price } = selectData;
//   const stripe = useStripe();
//   const elements = useElements();
//   const { user } = useContext(AuthContext);
//   const [axiosSecure] = useAxiosSecure()
//   const [cardError, setCardError] = useState('');
//   const [clientSecret, setClientSecret] = useState('');
//   const [processing, setProcessing] = useState(false);
//   // const [transactionId, setTransactionId] = useState('');

//   useEffect(() => {
//     if (price > 0) {
//       axiosSecure.post('/create-payment-intent', { price })
//         .then(res => {
//           console.log(res.data.clientSecret)
//           setClientSecret(res.data.clientSecret);
//         })
//     }
//   }, [price, axiosSecure])


//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return
//     }

//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return
//     }

//     const { error } = await stripe.createPaymentMethod({
//       type: 'card',
//       card
//     })

//     if (error) {
//       console.log('error', error)
//       setCardError(error.message);
//     }
//     else {
//       setCardError('');
//       // console.log('payment method', paymentMethod)
//     }

//     setProcessing(true)

//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: card,
//           billing_details: {
//             email: user?.email || 'unknown',
//             name: user?.displayName || 'anonymous'
//           },
//         },
//       },
//     );

//     if (confirmError) {
//       console.log(confirmError);
//     }

//     console.log('payment intent', paymentIntent)
//     setProcessing(false)
//     // if (paymentIntent.status === 'succeeded') {
//     //     setTransactionId(paymentIntent.id);
//     //     // save payment information to the server
//     //     const payment = {
//     //         email: user?.email,
//     //         transactionId: paymentIntent.id,
//     //         price,
//     //         date: new Date(),
//     //         quantity: cart.length,
//     //         cartItems: cart.map(item => item._id),
//     //         menuItems: cart.map(item => item.menuItemId),
//     //         status: 'service pending',
//     //         itemNames: cart.map(item => item.name)
//     //     }
//     //     axiosSecure.post('/payments', payment)
//     //         .then(res => {
//     //             console.log(res.data);
//     //             if (res.data.result.insertedId) {
//     //                 // display confirm
//     //             }
//     //         })
//     // }


//   }

//   return (
//     <>
//       <form className="w-2/3 m-8" onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//         <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
//           Pay
//         </button>
//       </form>
//       {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
//       {/* {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>} */}
//     </>
//   );
// };

// export default CheakOut;



import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { useEffect } from 'react';
import Swal from 'sweetalert2';
import './CheakOut.css'
import { useState } from 'react';
import { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';


const CheakOut = ({ selectData }) => {
  console.log(selectData._id);
  const [classID,setClassId]=useState([])

  useEffect(()=>{
    fetch(`https://academy-sports-abdullahalmamun2001.vercel.app/selected/${selectData.classId}`)
    .then(res=>res.json())
    .then(data=>setClassId(data))
    
  },[selectData])
  console.log(classID);


  let updateSit=selectData.sit-1
  console.log(updateSit);

  let updateEnrol=selectData.enrolled+1
  console.log(updateEnrol);



  const { price } = selectData;

  const stripe = useStripe()
  const element = useElements()
  const [axiosSecure] = useAxiosSecure()
  const { user } = useContext(AuthContext)
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {


    axiosSecure.post("/create-payment-intent", { price })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
  }, [axiosSecure, price])

  const handleSubmit = async (event) => {

    event.preventDefault()

    if (!stripe || !element) {
      return
    }

    const card = element.getElement(CardElement)

    if (card == null) {
      return
    }

    const { error, } = await stripe.createPaymentMethod({
      type: "card",
      card
    });





    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "unknown Name",
          email: user.email || "unknown email"
        },
      },
    })
      ;



    if (error || confirmError) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error?.message}`
      })
    }
    else {
      if (paymentIntent.status === "succeeded") {
        let update={ sit:updateSit,enrolled:updateEnrol}
        fetch(`https://academy-sports-abdullahalmamun2001.vercel.app/enrolled/${selectData.classId}`,{
          method:"PUT",
          headers:{
            'content-type':"application/json"
          },
          body:JSON.stringify(update)
        })

        Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Payment Done',
                  timer: 1500
                })
                const transactionId=paymentIntent.id;
                const email=user?.email;
                const className=selectData.name;
                const studentName=user?.displayName;
                const time=new Date();
                const payment={transactionId,email,className,time,studentName}
                axiosSecure.post('/payments',payment)
                .then(res=>{
                  console.log(res.data)
                  if(res.data.insertedId){
                    Swal.fire({
                      position: 'top-center',
                      icon: 'success',
                      title: 'Your information is save',
                      timer: 1500
                    })
                  }
                })
        // axiosSecure.patch(`/mySelected/${selectData._id}`,)
        //   .then(res => {
        //     console.log(res.data);
        //     if (res.data.modifiedCount) {
        //       Swal.fire({
        //         position: 'top-center',
        //         icon: 'success',
        //         title: 'Class Booked',
        //         showConfirmButton: false,
        //         timer: 1500
        //       })
        //     }
        //   })

        // axiosSecure.put(`/classEnroll/${selectData.classId}`, {
        //   seat: selectData.seat, totalEnrolled: selectData.enrolled
        // })
        //   .then(res => {
        //     console.log(res.data);
        //   })


      }
    }

    console.log(paymentIntent);

  }


  return (
    <div>
      <p> Price : {price}</p>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button disabled={!stripe || !clientSecret} type="submit" className='bg-green-600 py-1 px-5 rounded-lg text-white mt-2 shadow-lg'>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheakOut;