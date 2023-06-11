import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: classInfo = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/classes/${user?.email}`
      );
      return res.data;
    },
  });

  const modalRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <div>
      <h2>my classes : {classInfo.length}</h2>

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
                <td>Enroll</td>

                <td>
                  <button className="btn">Update</button>
                </td>

                <td>
                  <div>
                    <button className="btn" onClick={() => openModal(item)}>
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
          <dialog ref={modalRef} className="modal" open>
            <form method="dialog" className="modal-box">
              <button
                htmlFor=""
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">{selectedItem.status}</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
              <p>{selectedItem.feedback}</p>{" "}
              {/* Display the selected item's feedback */}
            </form>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default MyClasses;
