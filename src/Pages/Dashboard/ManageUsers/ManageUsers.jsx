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
        </div>
    );
};

export default ManageUsers;