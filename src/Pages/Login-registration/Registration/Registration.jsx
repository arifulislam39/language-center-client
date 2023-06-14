import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect } from "react";

const Registration = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const { createUser, userProfile, userProfileUpdate } =
    useContext(AuthContext);
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const toggle = () => {
    setShowPass(!showPass);
  };
  const toggleCon = () => {
    setShowConPass(!showConPass);
  };

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;

        userProfile(data.name, data.photo).then(() => {
          userProfileUpdate(data.name, data.photo);

          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photo,
            role: "student",
          };

          fetch("https://language-center-server-nu.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();

                Swal.fire({
                  title: "User created successfully.",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
              }
            });
        });

        console.log(createdUser);
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const passwordValue = watch("password");
  const confirmPasswordValue = watch("confirmPassword");

  useEffect(() => {
    if (passwordValue !== confirmPasswordValue) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  }, [passwordValue, confirmPasswordValue]);

  return (
    
    <div className="hero min-h-screen bg-[#C1DCDC] rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src="" alt="" />
        </div>
        <div className="card mt-28 mb-24 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl -mb-10 font-bold text-center">Registration </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className="relative">
                  <input
                    type={showPass === false ? "password" : "text"}
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
                  <div className="absolute top-7 right-5 ">
                    {showPass === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
               <div className="relative">
               <input
                  type={showConPass === false ? "password" : "text"}
                  placeholder="Confirm password"
                  className="input input-bordered border-[#123821] border-2"
                  name="confirmPassword"
                  {...register("confirmPassword")}
                />
                <div className="absolute top-7 right-5 ">
                    {showConPass === false ? (
                        <AiFillEye onClick={toggleCon} />
                     
                    
                    ) : (
                      <AiFillEyeInvisible onClick={toggleCon} />
                    )}
                  </div>
               </div>
                {confirmPasswordError && (
                  <p className="text-red-600">{confirmPasswordError}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  {...register("photo")}
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
            <p className="text-center -mt-10">
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
