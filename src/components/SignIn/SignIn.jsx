import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/Provider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
    const navigate = useNavigate();
    const {signInWithGoogle, signInWithEmailPass} = useContext(AuthContext);

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then((result) => {
            console.log(result.user);
            toast.success("Sign in Successful", {
                position: "top-center"
            });
            navigate("/");
        })
        .catch(error => {
            console.log("ERROR Message", error.message);
            toast.error("Failed to Sign in");
        });
    };

    const handleSignInByEmailPass = (e) => {
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
    //    console.log(email, password);
       signInWithEmailPass(email, password)
       .then(result => {
        console.log(result.user);
        toast.success("Sign In successful", {
            position: "top-center"
        });
        e.target.reset();
        navigate("/");
       })
       .catch(error => {
        console.log("ERROR Message", error.message);
        toast.error("Failed to Sign in");
       });
    };

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center my-3">
        Sign In Now
      </h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="w-4/5 mx-auto">
            <button onClick={handleSignInWithGoogle} className="w-full text-white font-bold btn btn-warning mt-12 md:px-6 text-center">Sign In With Google <span className="text-2xl ml-2"><FcGoogle /></span></button>
        </div>
        <form onSubmit={handleSignInByEmailPass} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover font-semibold">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success text-white font-bold">Sign In</button>
          </div>
        </form>

        <p className="font-bold text-center pb-8">If you are a new user, Please <Link to="/signUp" className="text-accent underline">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;