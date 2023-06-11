import Swal from "sweetalert2";
import useClass from "../../../Hooks/useClass";


const ManageClasses = () => {
  const [classes, refetch] = useClass();

  const handleApprove = (item) => {
    fetch(`http://localhost:5000/classes/${item._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class Approved',
            showConfirmButton: false,
            timer: 1500
          })
         
        }
      });
  };
  
  const handleDeny = (item) => {
    fetch(`http://localhost:5000/classes/${item._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'denied' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class Denied',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      });
  };

  
  


  return (
    <div>
      <h2>Manage classes : {classes.length}</h2>
      <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr
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
                                <td>
                                    {item.instructor_email}
                                </td>
                                <td>
                                    {item.available_seats}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleApprove(item)} className="btn">Approve</button>
                                   
                                </td>
                                <td><button onClick={() => handleDeny(item)}  className="btn">Deny</button></td>
                                <td><button  className="btn">Feedback</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default ManageClasses;
