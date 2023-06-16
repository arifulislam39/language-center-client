import { useEffect, useState } from "react";
import img2 from "../../assets/images/banner/banner3.jpg";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);

  useEffect(() => {
    fetch("https://language-center-server-nu.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div >
      <div>
        <img className="w-full h-[300px]" src={img2} alt="" />
      </div>
      <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20 px-20">

        {
            instructors.map((instructor)=>(
                <div key={instructor._id}><div className=" bg-purple-200 w-full h-auto flex flex-col items-center p-8 rounded-lg shadow-2xl group mt-20" data-aos="zoom-in-up" data-aos-duration="1500">
                <div className="aspect-square w-full -m-24 bg-center rounded-lg bg-cover shadow-sm translate-all duration-500 z-50" >
                  <img className="rounded-lg" src={instructor.photo} alt="" />
                </div>
                <div className="flex flex-col invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10 ">
                    <div className="flex flex-col items-center -mt-24 group-hover:mt-24 translate-all duration-500">
                        <h2 className="text-2xl tracking-wide">{instructor.name}</h2>
                        <h2 className="text-2xl tracking-wide">{instructor.email}</h2>
                    </div>
        
                </div>
              </div></div>
            ))
        }
      </div>
   
    </div>
  );
};

export default Instructors;
