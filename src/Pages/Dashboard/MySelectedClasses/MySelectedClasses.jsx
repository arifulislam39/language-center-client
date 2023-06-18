import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [cart, refetch] = useCart([]);
  console.log(cart.length);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://language-center-server-nu.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">
        My selected classes
      </h2>
      <div className="table-responsive">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{item.class_name}</td>
                <td>{item.instructor_name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${item._id}`}>
                    <button className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]">Pay</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
