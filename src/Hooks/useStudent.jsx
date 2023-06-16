import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";

const useStudent = () => {
    const {user, loading} = useContext(AuthContext);
    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://language-center-server-nu.vercel.app/users/student/${user?.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
}
export default useStudent;