import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Provider";
import { toast } from "react-toastify";

const SignUp = () => {
    const {createUserWithEmailPass} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log(name, email, password);
        createUserWithEmailPass(email, password)
        .then(result => {
            console.log(result.user);
            event.target.reset();
            toast.success("Sign up successful", {
                position: "top-center"
            });
            navigate("/signIn");
        })
        .catch(error => {
            console.log("ERROR Message", error.message);
            toast.error("Failed to Sign up");
           });
    };

  return (
    <div className="my-12">
    <h2 className="text-3xl font-bold text-center my-3">
      Sign Up Now
    </h2>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent text-white font-bold">Sign Up</button>
        </div>
      </form>

      <p className="text-center font-bold pb-8">Already have an account, Please <Link to="/signIn" className="text-success underline">Sign In</Link></p>
    </div>
  </div>
  );
};

export default SignUp;
