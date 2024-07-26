import Layout1 from "../components/screens/Home/Layout1";
import Layout2 from "../components/screens/Home/Layout2";
import Layout3 from "../components/screens/Home/Layout3";
import { DesignContext } from "../contexts/DesignIndexContext";
import { useContext } from "react";

const Home = () => {
    const { designIndex } = useContext(DesignContext);

    function renderDesign(index) {
        switch (index) {
            case 0:
                return <Layout1 />;
            case 1:
                return <Layout2 />;
            case 2:
                return <Layout3 />;
        }
    }

    return renderDesign(designIndex);
};

export default Home;
