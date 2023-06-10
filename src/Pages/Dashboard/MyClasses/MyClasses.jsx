import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
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
                  <button className="btn">View Feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
