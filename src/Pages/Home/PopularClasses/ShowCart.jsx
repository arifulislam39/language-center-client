import { useContext } from "react";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShowCart = ({cls}) => {
    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructor();
    //const {role}=users;
    const { class_image, price, class_name, instructor_name,instructor_email, available_seats , enrolled_student, _id} = cls;
    console.log(cls);


    const cardClassName = available_seats === 0 ? 'bg-red-700' : 'bg-base-100';

  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();


  //check logged in user
  const handleUserCheck =()=>{
    if(!user){
      confirm('You have to log in first to Enroll Class')
    }
  }
//add to card
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        class_image,
        price,
        instructor_email,
        class_name,
        instructor_name,
        available_seats,
        email: user.email,
        enrolled_student,
        classId:_id
      };

      fetch("https://language-center-server-nu.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Enroll the Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login", { state: { from: location } });
        }
      });
    }
  };

    return (
        <div  className={cardClassName}>
   
      <div className="card w-full h-[500px]  shadow-2xl" key={cls._id} data-aos="flip-left"  data-aos-duration="3000">
        <figure >
          <img src={class_image} alt="Shoes" />
        </figure>
        <div className="card-body">
         <h2 className="card-title text-[#123821]">{class_name}</h2>
          <h2 className="">Instructor : {instructor_name}</h2>
          <p>Available Seats:  {available_seats}</p>
          <p>Enrolled:  {enrolled_student}</p>
          <p className="text-red-400"> Price : <span className="text-xl">${price}</span> </p>
          <div className="card-actions justify-center">
            {
              !isAdmin && !isInstructor && (
                <button
                onClick={() => {
                  handleUserCheck();
                  handleAddToCart(cls);
                }}
                className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]"
              disabled={available_seats ===0}>
                Enroll
              </button>
              )
            }
          
          
          </div>
         </div>
        </div>
    </div>
    );
};

export default ShowCart;