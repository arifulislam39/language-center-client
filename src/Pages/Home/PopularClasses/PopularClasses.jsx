import {  useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import ShowCart from "./ShowCart";
// import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
    const [popularClass, setPopularClass]=useState([]);


    useEffect(() => {
      axios
        .get("http://localhost:5000/popularClass")
        .then((response) => {
          // Handle the response data
          console.log(response.data);
          setPopularClass(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    }, []);

    return (
        <div>
            <SectionTitle heading={"Popular classes"}
            subHeading={"best classes"}></SectionTitle>
            <div>
      <div className="">
        <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20">
          {popularClass.map((cls) => (
            // <PopularClassCard key={cls._id}> </PopularClassCard>
            <ShowCart key={cls._id} cls={cls}></ShowCart>
           
          //   <div className="card w-full h-[500px] bg-base-100 shadow-2xl" key={cls._id}>
          //   <figure>
          //     <img src={cls.class_image} alt="Shoes" />
          //   </figure>
          //   <div className="card-body">
          //     <h2 className="card-title text-[#123821]">{cls.class_name}</h2>
          //     <h2 className="">Instructor : {cls.instructor_name}</h2>
          //     <p>Available Seats : {cls.available_seats}</p>
          //     <p> Enrolled : {cls.enrolled_student}</p>
          //     <p className="text-red-400"> Price : <span className="text-xl">${cls.price}</span> </p>
          //     <div className="card-actions justify-center">
          //       <button
                 
          //         className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]"
          //       >
          //         Enroll
          //       </button>
          //     </div>
          //   </div>
          // </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default PopularClasses;

