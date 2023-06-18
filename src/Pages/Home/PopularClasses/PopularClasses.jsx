import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import ShowCart from "./ShowCart";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    axios
      .get("https://language-center-server-nu.vercel.app/popularClass")
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
    <div className="p-10 md:p-20">
      <SectionTitle heading={"Popular classes"} subHeading={"Only The Best"} />
      <div>
        <div className="grid gap-8 md:gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 md:mt-20 mb-10 md:mb-20">
          {popularClass.map((cls) => (
            <ShowCart key={cls._id} cls={cls} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
