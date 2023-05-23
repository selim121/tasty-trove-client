import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {


    return (
        <>
            <section>
                <SectionTitle
                    subHeading={'--From 11.00am to 10.00pm--'}
                    heading={'Order Online'}
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h3 className="text-4xl text-white uppercase text-center -mt-16">
                            Salads
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h3 className="text-4xl text-white uppercase text-center -mt-16">
                            Pizzas
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h3 className="text-4xl text-white uppercase text-center -mt-16">
                            Soups
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className="text-4xl text-white uppercase text-center -mt-16">
                            Desserts
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h3 className="text-4xl text-white uppercase text-center -mt-16">
                            Salads
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Category;