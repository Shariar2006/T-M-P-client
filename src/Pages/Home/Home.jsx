import Banner from "./Banner";
import BenefitsUsingTaskSync from "./BenefitsUsingTaskSync";
import WhichPersonUse from "./WhichPersonUse";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhichPersonUse></WhichPersonUse>
            <BenefitsUsingTaskSync></BenefitsUsingTaskSync>
        </div>
    );
};

export default Home;