import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const ThirdPartyAuth = () => {
  const { handleGoogleSignIn, setUser, setPic, handleGitHubSignIn } =
    useContext(AuthContext);
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setPic(loggedUser.photoURL);
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signInWithGitHub = () => {
    handleGitHubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setPic(loggedUser.photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-full">
      <button onClick={() => signInWithGoogle()} className="sign-in_ggl mb-2">
        <span>Sign In with Google</span>
      </button>
      <button onClick={() => signInWithGitHub()} className="sign-in_apl">
        <span>Sign In with GitHub</span>
      </button>
    </div>
  );
};

export default ThirdPartyAuth;
