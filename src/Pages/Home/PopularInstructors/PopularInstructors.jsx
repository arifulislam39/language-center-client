import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
  
    useEffect(() => {
      fetch("https://language-center-server-nu.vercel.app/instructor")
        .then((res) => res.json())
        .then((data) => setInstructors(data));
    }, []);
    return (
        <div className="px-20">
            <SectionTitle heading={"Popular Instructors"}
            subHeading={"Meet The Our Best Team"}></SectionTitle>
            <div>
      <div>

      </div>
      <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20">

        {
            instructors.map((instructor)=>(
                <div key={instructor._id}><div className="bg-lime-100 w-full h-auto flex flex-col items-center p-8 rounded-lg shadow-2xl group mt-20" data-aos="zoom-in-up" data-aos-duration="1500">
                <div className="aspect-square w-full -m-24 bg-center rounded-lg bg-cover shadow-sm translate-all duration-500 z-50" >
                  <img className="rounded-lg  w-96 h-60" src={instructor.photo} alt="" />
                </div>
                <div className="invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10 ">
                    <div className=" items-center -mt-24 group-hover:mt-24 translate-all duration-500">
                        <h2 className="text-4xl text-[#123821]">{instructor.name}</h2>
                        <h2 className="text-xl ">Mail : {instructor.email}</h2></div>
                    
        
                </div>
              </div></div>
            ))
        }
      </div>
   
    </div>
        </div>
    );
};

export default PopularInstructors;