import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://language-center-server-nu.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="px-4 md:px-20">
      <SectionTitle
        heading={"Popular Instructors"}
        subHeading={"Meet Our Best Team"}
      />
      <div>
        <div />
        <div className="grid gap-6 sm:gap-8 md:gap-14 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {instructors.map((instructor) => (
            <div key={instructor._id}>
              <div
                className="bg-lime-100 w-full h-auto flex flex-col items-center p-4 md:p-8 rounded-lg shadow-2xl group mt-8 sm:mt-10 md:mt-20"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              >
                <div className="aspect-square w-full -m-8 sm:-m-12 bg-center rounded-lg bg-cover shadow-sm translate-all duration-500 z-50">
                  <img
                    className="rounded-lg w-full h-48 sm:h-56 md:h-60"
                    src={instructor.photo}
                    alt=""
                  />
                </div>
                <div className="invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10 ">
                  <div className="items-center -mt-12 sm:-mt-16 md:-mt-24 group-hover:mt-24 translate-all duration-500">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#123821]">
                      {instructor.name}
                    </h2>
                    <h2 className="text-lg sm:text-xl">
                      Mail: {instructor.email}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
