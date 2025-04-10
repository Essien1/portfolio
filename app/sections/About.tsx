/* eslint-disable no-use-before-define */

import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"About my Tech Career"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Hi, I’m Essien Essien — a dedicated software developer based in Lagos, Nigeria. I’m passionate about building web solutions that solve real user problems and always excited to take on fresh, impactful projects." />

                        <AnimatedBody
                            delay={0.1}
                            text="I’m a driven and results-focused individual with a passion for continuous learning and contributing to impactful projects. I have hands-on experience with programming languages like C#, Python, JavaScript, HTML, and CSS, along with frameworks such as React and Node.js. I’m eager to join a forward-thinking organization where I can apply my expertise, expand my capabilities, and make a valuable contribution. Known for being adaptable, creative, and solution-oriented, I consistently seek effective ways to overcome challenges."
                        />

                        {/* <AnimatedBody
                delay={0.2}
                text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
              /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
