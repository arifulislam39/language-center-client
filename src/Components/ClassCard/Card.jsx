import { useContext } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ cls }) => {
  const { class_image, price, class_name, instructor_name, available_seats } = cls;
  console.log(cls);
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        class_image,
        price,

        class_name,
        instructor_name,
        available_seats,
        email: user.email,
      };

      fetch("http://localhost:5000/carts", {
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
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
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
    <div>
      <div className="card w-full h-[500px] bg-base-100 shadow-2xl" key={cls._id}>
        <figure>
          <img src={class_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{class_name}</h2>
          <h2 className="card-title">{instructor_name}</h2>
          <p>{available_seats}</p>
          <p>{price}</p>
          <div className="card-actions justify-center">
            <button
              onClick={(item) => handleAddToCart(item)}
              className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
