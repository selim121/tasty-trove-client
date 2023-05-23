import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import service from '../../../assets/home/chef-service.jpg'
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tasty Trove | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Cover
                img={service}
                title={'Tasty Trove'}
            ></Cover>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>

    );
};

export default Home;