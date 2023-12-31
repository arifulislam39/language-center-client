import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye , AiFillEyeInvisible} from 'react-icons/ai';

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPass, setShowPass]=useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // handle password
  const toggle =()=>{
    setShowPass(!showPass)
  }

  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        reset();
        Swal.fire({
          title: 'User login successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })



        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-[#C1DCDC] rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src="" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl -mb-10 font-bold text-center">Login </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered border-[#123821] border-2"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input
                  type={(showPass===false)?"password":"text"}
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered border-[#123821] border-2"
                  name="password"
                />
                <div className="absolute top-7 right-5 ">
                 {
                  (showPass===false)?<AiFillEye onClick={toggle}/>: <AiFillEyeInvisible onClick={toggle}/>
                 }
                 
                
                </div>
                </div>
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
              New to Here?
              <Link className="text-blue-900 font-bold" to="/registration">
                Registration
              </Link>
            </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
