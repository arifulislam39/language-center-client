import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import {FcGoogle} from "react-icons/fc"
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;

        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo:loggedInUser.photoURL,role:"student"}
        fetch('https://language-center-server-nu.vercel.app/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
      }).then(res => res.json())
      .then(() => {
          Navigate(from, { replace: true });
      })


        Swal.fire({
          title: 'User login successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })


        Navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="">
      <div className="divider">OR</div>
      <div className="form-control mt-6"><button onClick={handleGoogleSignIn} className="btn text-black hover:text-black"> <FcGoogle className="text-3xl mr-8"></FcGoogle> With Google</button>
      </div>

    
    </div>
  );
};

export default GoogleLogin;
