import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
const ThirdPartyAuth = () => {
  const { handleGoogleSignIn, setUser, setPic, handleGitHubSignIn } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setPic(loggedUser.photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  const signInWithGitHub = () => {
    handleGitHubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setPic(loggedUser.photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div className="w-full">
      <button onClick={() => signInWithGoogle()} className="sign-in_ggl mb-2">
        <span className="flex items-center gap-2">
          <FaGoogle />
          Sign In with Google
        </span>
      </button>
      <button onClick={() => signInWithGitHub()} className="sign-in_apl">
        <span className="flex items-center gap-2">
          <FaGithub /> Sign In with GitHub
        </span>
      </button>
    </div>
  );
};

export default ThirdPartyAuth;
