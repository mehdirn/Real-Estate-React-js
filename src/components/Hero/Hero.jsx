import React from "react";
import {HiLocationMarker} from 'react-icons/hi'
import './Hero.css'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
    return (
        <div>
            <section className="hero-wrapper">
                <div className="hero-container paddings innerWidth flexCenter flexCenter">
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle"/>
                                <motion.h1
                                initial={{y: '2rem' , opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{
                                    duration : 2,
                                    type : 'spring'
                                }}
                                >
                                Discover <br/> Most Suitable <br/> Property
                                </motion.h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
                            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
                        </div>
                        <div className="flexCenter search-bar">
                            <HiLocationMarker color='var(--blue)' size={25}/>
                            <input type="text"/>
                            <button className="button">Search</button>
                        </div>
                        <div className="flexCenter stats">
                            <div className="flexColStart stat">
                                <span><CountUp CountUp start={8800} end={90000} duration={4} />
                                <span>+</span>
                                </span>
                                <span className="secondaryText">Premium Product</span>
                            </div>
                            <div className="flexColStart stat">
                                <span><CountUp CountUp start={1910} end={2000} duration={4} />
                                <span>+</span>
                                </span>
                                <span  className="secondaryText">Happy Customers</span>
                            </div>
                            <div className="flexColStart stat">
                                <span><CountUp end={28}/>
                                <span>+</span>
                                </span>
                                <span  className="secondaryText">Award Winning</span>
                            </div>
                        </div>
                    </div>
                    <div className="flexCenter hero-right">
                        <motion.div className="image-container"
                        initial={{x: '7rem' , opacity : 0}}
                        animate={{x:0 , opacity : 1}}
                        transition={{
                            duration : 2,
                            type : 'spring'
                        }}
                        >
                            <img src="/hero-image.png" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero