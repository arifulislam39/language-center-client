import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const Registration = () => {
  const { createUser, userProfile, userProfileUpdate } =
    useContext(AuthContext);
  const Navigate = useNavigate();
  //const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;

       

        userProfile(data.name, data.photo)
        .then(() => {
          userProfileUpdate(data.name, data.photo);

          // user data save on the database

          const saveUser = { name: data.name, email: data.email, photo:data.photo,role:"student" }
          fetch("http://localhost:5000/users", {
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(data =>{
            if (data.insertedId){
              reset();
             // alert msg
              Swal.fire({
               
                title: 'User created successfully.',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            }
          })
        });
        console.log(createdUser);

        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  console.log(watch("example")); // watch input value by passing the name of it


  return (
    <div className="hero min-h-screen bg-[#C1DCDC]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src="" alt="" />
        </div>
        <div className="card mt-28 mb-24 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Registration </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* error message */}
              {/* <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="name"
                  className="input input-bordered border-[#123821] border-2"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered border-[#123821] border-2"
                  name="email"
                />{" "}
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered border-[#123821] border-2"
                  name="password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}

                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case and one
                    special character.
                  </p>
                )}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-[#123821] border-2"
                  name="password"
                />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo" {...register("photo")}
                  placeholder="photo URL"
                  className="input input-bordered border-[#123821] border-2"
                  name="photo"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#123821] text-white hover:bg-[#A79132] transition duration-700 ease-in-out"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <p className="text-center">
              Already Have an Account?
              <Link className="text-blue-900 font-bold" to="/login">
                Login
              </Link>
            </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
