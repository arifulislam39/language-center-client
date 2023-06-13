import {  useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import Card from "../../../Components/ClassCard/Card";

const PopularClasses = () => {
    const [popularClass, setPopularClass]=useState([]);


    axios.get('http://localhost:5000/popularClass')
  .then(response => {
    // Handle the response data
    console.log(response.data);
    setPopularClass(response.data)
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

    return (
        <div>
            <SectionTitle heading={"Popular classes"}
            subHeading={"best classes"}></SectionTitle>
            <div>
      <div className="">
        <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20">
          {popularClass.map((cls) => (
             <Card key={cls._id} cls={cls}></Card>
        //     <div className="card w-full h-[500px] bg-base-100 shadow-2xl" key={cls._id}>
        //     <figure>
        //       <img src={cls.class_image} alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //       <h2 className="card-title">{cls.class_name}</h2>
        //       <h2 className="card-title">{cls.instructor_name}</h2>
        //       <p>{cls.available_seats}</p>
        //       <p> students: {cls.enrolled_student}</p>
        //       <p>{cls.price}</p>
        //       <div className="card-actions justify-center">
        //         <button
                 
        //           className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]"
        //         >
        //           Enroll
        //         </button>
        //       </div>
        //     </div>
        //   </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default PopularClasses;

// http://localhost:5000/popularClass