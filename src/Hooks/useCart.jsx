
import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = []} = useQuery({
      queryKey: ['carts', user?.email],
      queryFn: async() => {
          const res = await axios.get(`http://localhost:5000/carts/${user?.email}`);
          return res.data;
      }
  })
  //console.log(cart);

  return [cart, refetch]




    // const [carts, setCarts] = useState([]);
    // console.log(carts);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/carts/${user?.email}`)
    //       .then((res) => res.json())
    //       .then((result) => {
    //         setCarts(result);
    //         console.log(result);
    //       });
    //   }, [user]);
    // return [carts]
};

export default useCart;
