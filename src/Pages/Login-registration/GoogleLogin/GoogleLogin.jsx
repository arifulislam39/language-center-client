import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
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
      <div className="form-control mt-6"><button onClick={handleGoogleSignIn} className="btn bg-purple-900 btn-outline text-white">With Google</button>

      </div>

     
    </div>
  );
};

export default GoogleLogin;
