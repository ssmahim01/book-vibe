import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/Provider";

const Root = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div>
      <div className="lg:max-w-7xl w-11/12 mx-auto mb-12 min-h-[calc(100vh-265px)]">
       {!loading ? <NavBar></NavBar> : <span className="loading loading-bars loading-lg text-accent md:mt-40 mt-24 md:ml-80 ml-44 lg:ml-[600px]"></span>}
        {!loading && <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
