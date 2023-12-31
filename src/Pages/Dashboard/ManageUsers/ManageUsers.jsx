import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://language-center-server-nu.vercel.app/users"
      );
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://language-center-server-nu.vercel.app/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://language-center-server-nu.vercel.app/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">
        manage users
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full sm:w-auto">
          {/* head */}
          <thead className="text-xl sm:text-base">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th className="whitespace-nowrap">{index + 1}</th>
                <td className="whitespace-nowrap">{user.name}</td>
                <td className="whitespace-nowrap">{user.email}</td>
                <td className="whitespace-nowrap">{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeAdmin(user);
                      }}
                      className="btn text-white hover:bg-[#dabd3a] bg-[#123821] sm:whitespace-nowrap"
                      disabled={user.role === "admin"}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeInstructor(user);
                      }}
                      className="btn text-white hover:bg-[#dabd3a] bg-[#123821] sm:whitespace-nowrap"
                      disabled={user.role === "instructor"}
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
