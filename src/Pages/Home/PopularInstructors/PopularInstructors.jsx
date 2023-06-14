import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";



const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
  
    useEffect(() => {
      fetch("https://language-center-server-nu.vercel.app/instructor")
        .then((res) => res.json())
        .then((data) => setInstructors(data));
    }, []);
    return (
        <div>
            <SectionTitle heading={"Popular Instructors"}
            subHeading={"Meet The Our Best Team"}></SectionTitle>
            <div>
      <div>

      </div>
      <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20">

        {
            instructors.map((instructor)=>(
                <div key={instructor._id}><div className="bg-slate-300 w-full h-auto flex flex-col items-center p-8 rounded-lg shadow-2xl group mt-20" >
                <div className="aspect-square w-full -m-24 bg-center rounded-lg bg-cover shadow-sm translate-all duration-500 z-50" >
                  <img className="rounded-lg" src={instructor.photo} alt="" />
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