import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    if(user){
        return children;
    };

    if(loading){
        return <span className="loading loading-bars loading-lg text-accent md:mt-40 mt-24 md:ml-80 ml-44 lg:ml-[600px]"></span>
    };

    return (
        <Navigate to="/signIn"></Navigate>
    );
};

export default PrivateRoute;