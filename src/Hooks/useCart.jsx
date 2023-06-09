
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
const useCart = () => {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    console.log(cars);

    useEffect(() => {
        fetch(`http://localhost:5000/carts/${user?.email}`)
          .then((res) => res.json())
          .then((result) => {
            setCars(result);
            console.log(result);
          });
      }, [user]);
    return [cars]
};

export default useCart;
