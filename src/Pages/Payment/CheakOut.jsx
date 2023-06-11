import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheakOut.css'

import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import useAllClasses from "../../hooks/useAllClasses";
// import { useParams } from "react-router-dom";


const CheakOut = ({selectData}) => {
  const {price}=selectData();
  console.log(selectData);
  // const data=useParams()
  // console.log(data);
   
  // const [classes]=useAllClasses();
  // const {price}=classes;
  // console.log(price);

    const stripe=useStripe();
    const elements=useElements()
    const {user}=createContext(AuthContext)
    const [clientSecret,setClientSecret]=useState('')
    const [axiosSecure]=useAxiosSecure();



    useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  console.log(res.data.clientSecret)
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price,axiosSecure])

    
    const handleSubmit=async(event)=>{
        event.preventDefault();
         event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown person',
                  name: user?.displayName || 'anonymous person'
              },
          },
      },
  );
  if(confirmError){

  }
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  
        
    }
    return (
        <form onSubmit={handleSubmit}>
          <p>Price :{selectData.price}</p>
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
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheakOut;