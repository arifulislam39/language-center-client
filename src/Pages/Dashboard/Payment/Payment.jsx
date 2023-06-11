import { useLoaderData } from "react-router-dom";
//import useCart from "../../../Hooks/useCart";

const Payment = ({ item }) => {
  ////const [cart]=useCart([])
  console.log(item);
  //const update = useLoaderData();

  const data = useLoaderData();
  const {
    price,
    class_image,
    class_name,
    instructor_name,
    available_seats,
    _id,
    email
  } = data || {};
  console.log(data);
  //const {class_name}=item;
  // console.log(update);
  return (
    <div>
      <h1>payment page{class_name} </h1>
    </div>
  );
};

export default Payment;
