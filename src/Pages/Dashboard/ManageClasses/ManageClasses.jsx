import Swal from "sweetalert2";
import useClass from "../../../Hooks/useClass";
import { useRef, useState } from "react";

const ManageClasses = () => {
  const [classes, refetch] = useClass();
  

  //handle approve
  const handleApprove = (item) => {
    fetch(`https://language-center-server-nu.vercel.app/classes/${item._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Approved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //handle deny
  const handleDeny = (item) => {
    fetch(`https://language-center-server-nu.vercel.app/classes/${item._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "denied" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Denied",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //feedback modal
  const feedbackModalRef = useRef(null);
  const [item, setFeedback] = useState(null);

  const FeedbackOpenModal = (item) => {
    setFeedback(item);
    if (feedbackModalRef.current) {
      feedbackModalRef.current.showModal();
    }
  };
  

//feedback submit handler
  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
  
    const update = {
      feedback,
    };
  
    console.log(update);
  
    fetch(`https://language-center-server-nu.vercel.app/classes/${item._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback submitted",
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
     <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">manage classes</h2>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
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
                <td>{item.instructor_name}</td>
                <td>{item.instructor_email}</td>
                <td>{item.available_seats}</td>
                <td className="text-end">${item.price}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => handleApprove(item)} className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]" disabled={item?.status ==="approved" || item?.status ==="denied"}>
                    Approve
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeny(item)} className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]" disabled={item?.status ==="approved" || item?.status ==="denied"}>
                    Deny
                  </button>
                </td>
                <td>
                  {" "}
                  <div>
                    <button
                      className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]"
                      onClick={() => FeedbackOpenModal(item)}
                    >
                      Feedback
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* feedback modal */}
      <div>
        {item && (
          <dialog ref={feedbackModalRef} className="modal" open>
            <form onSubmit={handleFeedbackSubmit} method="dialog" className="modal-box">
              <button
                htmlFor=""
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setFeedback(null)}
              >
                ✕
              </button>
             <div className="text-center"> <h3 className="font-bold text-lg">Feedback</h3>
              <p className="py-4">
               Status: {item.class_name}
              </p>
              <p className="py-4">
               Status: {item.status}
              </p></div>
            <div className="form-control"> <textarea name="feedback" type="text" className="textarea textarea-bordered w-full" placeholder="Type here....."></textarea></div>

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
  );
};

export default ManageClasses;
