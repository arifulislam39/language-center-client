import { useEffect, useState } from "react";
import img from "../../assets/images/banner/banner6.jpg"

const Classes = () => {
    const [classes, setClasses]=useState([])
    console.log(classes);

    useEffect(()=>{
        fetch("/classes.json")
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    return (
        <div className="">
            <img src={img} alt="" className="w-full h-[300px]"/>
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
                    <button className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]">Enroll</button>
                  </div>
                </div>
              </div>))
            
            }
            </div>
            
        </div>
    );
};

export default Classes;