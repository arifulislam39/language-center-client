import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
//import useCart from "../../../Hooks/useCart";
import payment from '../../../assets/images/banner/payment.jpeg'


const Payment = () => {
  

  const item = useLoaderData();
 
  console.log(item);
  


  const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
  console.log(stripePromise);

  return (
    <div className="">
      <img src={payment} className="w-full rounded-xl h-60" alt="" />
       <h2 className="text-center divider mb-6 text-4xl text-[#123821] font-bold uppercase">Payment</h2>
      
     
     
     <div> <Elements stripe={stripePromise}>
        <CheckoutForm item={item}></CheckoutForm>
      </Elements></div>
    </div>
  );
};

export default Payment;
