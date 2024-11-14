'use client'

import Image from "next/image";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi"; 
import pic from "@/assets/image.png"

const COLORS_TOP = ["#0f172a", "#1f2937", "#082f49", "#1e1b4b"];


export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section 
            style={{
                backgroundImage,
            }}  
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center overflow-hidden">
                <span className="mb-2 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Welcome to Portfolio
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl text-center">
                    Meach Pichmonireach
                </h1>
                <Image
                    src={pic}
                    alt="Profile picture"
                    width={400}
                    className="my-4 rounded-2xl"
                />
            
                <p className="mb-8 max-w-xl text-center">
                    I am currently studying in my 4th Year at Limkokwing University
                </p>

                <div className="flex justify-center w-full">
                    <motion.button 
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{
                            scale: 1.015
                        }}
                        whileTap={{
                            scale: 0.985
                        }}
                        
                        className="flex w-fit items-center gap-2 rounded-full px-6 py-2"
                    >
                        Explore My Work
                        <FiArrowRight />
                    </motion.button>
                </div>
            </div>

            <div className="bg-circle-container overflow-hidden">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>
    );
}