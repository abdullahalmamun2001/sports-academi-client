// //import React from 'react';
// import {loadStripe} from '@stripe/stripe-js';
// import {CardElement, Elements, useElements, useStripe} from '@stripe/stripe-js';

// import '../styles/common.css';
const stripePromise=loadStripe(`${import.meta.env.VITE_payment_secret_id}`);
import { Elements } from '@stripe/react-stripe-js';
// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements
//     console.log(elements);

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     // Use your card Element with other Stripe.js APIs
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });

//     if (error) {
//       console.log('[error]', error);
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
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


// const Payment = () => {
//     return (
//         <div>

// <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//             {/* <div>
//               <label> Send feedback</label>

//               Put this part before </body> tag
//               <input type="checkbox" id="my_modal_7" className="modal-toggle" />
//               <div className="modal">
//                 <form className="modal-box">
//                   <h3 className="text-lg font-bold">Send FeedBack</h3>
//                   <textarea name='feedback' placeholder="Write you " className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
//                   <input type="submit" className='block px-5 py-3  bg-green-800 text-white rounded-md hover:bg-green-600' />
//                 </form>
//                 <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
//               </div>

//             </div> */}
//         </div>
//     );
// };

// export default Payment;

import CheakOut from './CheakOut';
import { loadStripe } from '@stripe/stripe-js';
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const [selectData,setSelectData]=useState({})


    const data=useParams();
    console.log(data);
    useEffect(()=>{
        fetch(`http://localhost:5000/pay/${data.id}`)
        .then(res=>res.json())
        .then(data=>{
            data.map(single=>setSelectData(single))
        })
    },[data])

    

    return (
        <div>
            <h1>this is payment page</h1>
           
            <Elements stripe={stripePromise}>
                <CheakOut selectData={selectData}></CheakOut>
            </Elements>
        </div>
    );
};

export default Payment;