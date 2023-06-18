import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: classInfo = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://language-center-server-nu.vercel.app/classes/${user?.email}`
      );
      return res.data;
    },
  });

  // view Feedback Modal
  const ViewFeedbackModalRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const ViewFeedbackOpenModal = (item) => {
    setSelectedItem(item);
    if (ViewFeedbackModalRef.current) {
      ViewFeedbackModalRef.current.showModal();
    }
  };

  // Update modal
  const feedbackModalRef = useRef(null);
  const [item, setFeedback] = useState(null);

  const FeedbackOpenModal = (item) => {
    setFeedback(item);
    if (feedbackModalRef.current) {
      feedbackModalRef.current.showModal();
    }
  };

  // update class handler
  const handleUpdateDataSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const class_name = form.class_name.value;
    const class_image = form.class_image.value;
    const available_seats_string = form.available_seats.value;
    const available_seats = parseInt(available_seats_string);
    const priceString = form.price.value;
    const price = parseFloat(priceString);

    const update = {
      class_name,
      class_image,
      available_seats,
      price,
    };

    console.log(update);

    fetch(
      `https://language-center-server-nu.vercel.app/updateClass/${item._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">
        my classes
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Update</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classInfo.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.class_image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.class_name}</td>
                <td>{item.available_seats}</td>
                <td className="text-end">${item.price}</td>
                <td>{item.status}</td>
                <td>{item.enrolled_student}</td>
                <td>
                  <div>
                    <button
                      className="btn text-white hover:bg-[#dabd3a] bg-[#123821]"
                      onClick={() => FeedbackOpenModal(item)}
                    >
                      Update
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <button
                      className="btn text-white hover:bg-[#dabd3a] bg-[#123821]"
                      onClick={() => ViewFeedbackOpenModal(item)}
                    >
                      View Feedback
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* view Feedback modal */}
      <div>
        {selectedItem && (
          <dialog ref={ViewFeedbackModalRef} className="modal" open>
            <form method="dialog" className="modal-box">
              <button
                htmlFor=""
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">{selectedItem.status}</h3>

              <p>{selectedItem.feedback}</p>
              {/* Display the selected item's feedback */}
            </form>
          </dialog>
        )}
      </div>
      <div>
        {/* Update modal */}
        <div>
          {item && (
            <dialog ref={feedbackModalRef} className="modal" open>
              <form
                onSubmit={handleUpdateDataSubmit}
                method="dialog"
                className="modal-box"
              >
                <button
                  htmlFor=""
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setFeedback(null)}
                >
                  ✕
                </button>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Update</h3>
                  <p className="py-4">Class Name: {item.class_name}</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Name</span>
                  </label>
                  <input
                    name="class_name"
                    type="text"
                    defaultValue={item.class_name}
                    className="input input-bordered input-primary"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Image</span>
                  </label>
                  <input
                    name="class_image"
                    type="photo"
                    defaultValue={item.class_image}
                    className="input input-bordered input-primary"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Seats</span>
                  </label>
                  <input
                    name="available_seats"
                    type="text"
                    defaultValue={item.available_seats}
                    className="input input-bordered input-primary"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    name="price"
                    type="text"
                    defaultValue={item.price}
                    className="input input-bordered input-primary"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#123821] text-white hover:bg-[#A79132] transition duration-700 ease-in-out"
                    type="submit"
                    value="login"
                  />
                </div>
              </form>
            </dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
