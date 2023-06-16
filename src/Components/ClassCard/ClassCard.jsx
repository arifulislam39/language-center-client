import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const ClassCard = () => {
  const [classes, setClasses] = useState([]);

  //console.log(classes);

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
  }, [ ]);

  return (
    <div className="px-20">
      <div className="">
        <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20">
          {classes.map((cls) => (
            <Card key={cls._id} cls={cls}></Card>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
