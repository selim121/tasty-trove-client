import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import service from '../../../assets/home/chef-service.jpg'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>

            <div className="hero h-80 w-full" style={{ backgroundImage: `url(${service})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-black h-2/3 w-4/5 text-center bg-base-200">
                    <div className="">
                        <h1 className="my-5 text-5xl">Tasty Trove</h1>
                        <p className="my-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;