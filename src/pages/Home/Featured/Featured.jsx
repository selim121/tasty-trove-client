import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-16'>
            <SectionTitle
                heading={'Featured item'}
                subHeading={'--Check it out--'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Marc 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nemo totam consectetur sint possimus perspiciatis, rerum praesentium a, dicta sit fugiat esse nobis error nulla in placeat quaerat animi iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti alias, maxime atque dolore est ratione excepturi assumenda asperiores illo consectetur!</p>
                    <button className="btn btn-outline bg-[#e1cff6]  border-0 border-b-4 btn-primary mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;