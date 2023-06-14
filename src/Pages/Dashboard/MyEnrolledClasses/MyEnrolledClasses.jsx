import axios from "axios";
import { useEffect, useState } from "react";

const MyEnrolledClasses = () => {
    const [enrolled, setEnrolled]=useState([]);
    console.log(enrolled);

    useEffect(() => {
        axios
          .get("https://language-center-server-nu.vercel.app/popularClass")
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
          <div className="mt-10">
           
            <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">My Enrolled classes</h2>
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