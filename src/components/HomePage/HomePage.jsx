import { useContext } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { AuthContext } from "../../providers/Provider";

const HomePage = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <Banner></Banner>
            {user && <Books></Books>}
        </div>
    );
};

export default HomePage;