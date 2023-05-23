import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero h-[700px] bg-fixed w-full">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-white h-1/2 w-4/5 text-center bg-base-200 bg-opacity-10">
                        <div className="">
                            <h1 className="text-5xl uppercase">{title}</h1>
                            <p className="my-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;