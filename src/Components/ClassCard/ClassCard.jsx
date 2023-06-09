import { useContext, useEffect, useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Pages/Providers/AuthProvider";

const ClassCard = () => {
    const [classes, setClasses]=useState([]);
    
    console.log(classes);

    const { name, image, price, _id } = classes;

    const location = useLocation();
    const {user} = useContext(AuthContext);
    //const [, refetch] = useCart();
   const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5000/classes")
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[]);


    const handleAddToCart = classes => {
        console.log(classes);
        if(user && user.email){
            const cartItem = {_id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    //refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }




    return (
        <div>
             <div className="">
            {/* <img src={img} alt="" className="w-full h-[300px]"/> */}
            <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20">
            {
                classes.map((cls)=>(<div className="card w-full bg-base-100 shadow-2xl" key={cls._id}>
                <figure><img src={cls.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{cls.className}</h2>
                  <h2 className="card-title">{cls.instructorName}</h2>
                  <p>{cls.availableSeats}</p>
                  <p>{cls.price}</p>
                  <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(classes)} className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]">Enroll</button>
                  </div>
                </div>
              </div>))
            
            }
            </div>
            
        </div>
        </div>
    );
};

export default ClassCard;