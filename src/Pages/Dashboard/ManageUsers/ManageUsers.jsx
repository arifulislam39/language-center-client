import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Swal from "sweetalert2";

const ManageUsers = () => {

    const { refetch,data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/users');
            return res.data;
        }
    });


    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role: 'admin' }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
             
            }
          });
      };
      
      const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role: 'instructor' }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
              
            }
          });
      };




    return (
        <div>
            <h3>manage users {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
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
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn ">Make Admin</button> 
                                    }</td>
                               <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeInstructor(user)} className="btn">Make Instructor</button> 
                                    }</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;