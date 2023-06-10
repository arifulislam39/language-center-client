import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const ManageUsers = () => {

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/users');
            return res.data;
        }
    })

   



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
                            <th>Status</th>
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
                                <td>Status</td>
                                <td><button>Make Instructor</button></td>
                                <td><button>Make Admin</button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;