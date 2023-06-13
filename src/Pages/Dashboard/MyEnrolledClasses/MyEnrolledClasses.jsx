import axios from "axios";
import { useEffect, useState } from "react";


const MyEnrolledClasses = () => {
    const [enrolled, setEnrolled]=useState([]);
    console.log(enrolled);

    useEffect(() => {
        axios
          .get("http://localhost:5000/popularClass")
          .then((response) => {
            // Handle the response data
            console.log(response.data);
            setEnrolled(response.data);
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      }, []);


    return (
        <>
          <div>
            <h2 className="text-center text-4xl">my selected classes {enrolled.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.class_name}
                                </td>
                                <td>
                                    {item.instructor_name}
                                </td>
                                <td className="text-end">${item.price}</td>
                               
                                

                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default MyEnrolledClasses;