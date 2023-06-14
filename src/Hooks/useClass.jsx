import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const useClass = () => {
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await axios.get('https://language-center-server-nu.vercel.app/classes');
            return res.data;
        }
    })

    return [classes, refetch]
}



export default useClass;