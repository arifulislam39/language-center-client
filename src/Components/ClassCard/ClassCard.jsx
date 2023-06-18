import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const ClassCard = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://language-center-server-nu.vercel.app/approvedClasses")
      .then((response) => {
        // Handle the response data
        console.log(response.data);
        setClasses(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    
      <div className="my-24 p-10 md:p-20">
        <div className="grid gap-6 md:gap-8 lg:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <Card key={cls._id} cls={cls} />
          ))}
        </div>
      </div>
   
  );
};

export default ClassCard;
