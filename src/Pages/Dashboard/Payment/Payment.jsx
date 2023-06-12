import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
//import useCart from "../../../Hooks/useCart";


const Payment = () => {
  ////const [cart]=useCart([])
  //console.log(item);
  //const update = useLoaderData();

  const item = useLoaderData();
  // const {
  //   price,
  //   class_image,
  //   class_name,
  //   instructor_name,
  //   available_seats,
  //   _id,
  //   email,
  // } = data || {};
  console.log(item);
  //const {class_name}=item;
  // console.log(update);



  const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
  console.log(stripePromise);

  return (
    <div>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste adipisci quia amet voluptate, harum consequuntur?</h2>
     
      {/* <h1>payment page  : {class_name} </h1> */}

      <Elements stripe={stripePromise}>
        <CheckoutForm item={item}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
