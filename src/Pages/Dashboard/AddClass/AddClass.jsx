import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    const saveData = {
      class_name: data.class_name,
      class_image: data.class_image,
      price: parseFloat(data.price),
      available_seats: parseInt(data.available_seats),
      instructor_name: data.instructor_name,
      instructor_email: data.instructor_email,status:"pending",enrolled_student:parseInt(0)
    };
    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // alert msg
          reset();
          Swal.fire({
            title: "Class Added successfully.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">add a class</h2>
      {/* <ToastContainer className="lg:text-3xl" />
        <Head title="ADD TOYS"></Head> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                name="class_name"
                {...register("class_name")}
                type="text"
                defaultValue=""
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Image URL</span>
              </label>
              <input
                name="class_image"
                {...register("class_image")}
                type="photo"
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                {...register("price")}
                defaultValue=""
                type="text"
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                name="available_eats"
                {...register("available_seats")}
                type="text"
                defaultValue=""
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                name="instructor_name"
                {...register("instructor_name")}
                type="text"
                value={user?.displayName}
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                name="instructor_email"
                {...register("instructor_email")}
                type="email"
                value={user?.email}
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
          </div>

          <div className="form-control mt-6 ml-20">
            <input
              // onClick={notify}
              className="btn bg-[#123821] text-white hover:bg-[#A79132] transition duration-700 ease-in-out"
              type="submit"
              value="Add"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
