

// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

import { Link } from "react-router-dom";



const Registration = () => {
//   const { createUser, userProfile, userProfileUpdate } =
//     useContext(AuthContext);
//   const Navigate = useNavigate();
//   const [error, setError] = useState("");

  //Registration
//   const handleRegister = (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const photo = form.photo.value;

//     console.log(name, email, password, photo);

    //pass valid
    // if ((email, password)) {
    //   if (password.length < 6) {
    //     setError("Your password should be at least 6 characters long.");
    //     return;
    //   }

      // create user
//       createUser(email, password)
//         .then((result) => {
//           const createdUser = result.user;

//           userProfile(name, photo).then(() => {
//             userProfileUpdate(name, photo);
//           });

//           console.log(createdUser);

//           Navigate("/");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       setError("Email and password required");
//       return;
//     }
//   };

  return (
    <div className="hero min-h-screen bg-[#C1DCDC]">
    
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src="" alt="" />
        </div>
        <div className="card mt-28 mb-24 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Registration </h1>
            <form onSubmit=''>
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
                  <span></span>
                </div>
              </div> */}
              <p className="text-red-600 border-2 border-[#123821]"></p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
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
                  placeholder="email"
                  className="input input-bordered border-[#123821] border-2"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-[#123821] border-2"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-[#123821] border-2"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
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
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
