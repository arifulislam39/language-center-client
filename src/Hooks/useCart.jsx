
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
const useCart = () => {
    const { user } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    console.log(carts);

    useEffect(() => {
        fetch(`http://localhost:5000/carts/${user?.email}`)
          .then((res) => res.json())
          .then((result) => {
            setCarts(result);
            console.log(result);
          });
      }, [user]);
    return [carts]
};

export default useCart;
