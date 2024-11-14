
"use client"

// Import necessary components and libraries
import Image from "next/image"
import { motion } from "framer-motion"
import photoshop from '../assets/photoshop.svg'
import aftereffect from '../assets/aftereffect.svg'
import figma from '../assets/figma-1-logo-svgrepo-com.svg'
import illustrator from '@/assets/illustrator.svg'
import premiere from '@/assets/premiere.svg'
import github from '@/assets/github.svg'
import notion from '@/assets/notion.svg'

// Define an array of image objects, currently empty
const images = [
    { src: photoshop, alt: "photoshop" },
    { src: aftereffect, alt: "aftereffect" },
    { src: figma, alt: "figma" },
    { src: illustrator, alt: "illustrator" },
    { src: premiere, alt: "premiere" },
    { src: github, alt: "github" },
    { src: notion, alt: "notion" },
    { src: photoshop, alt: "photoshop" },
    { src: aftereffect, alt: "aftereffect" },
    { src: figma, alt: "figma" },
    { src: illustrator, alt: "illustrator" },
    { src: premiere, alt: "premiere" },
    { src: github, alt: "github" },
    { src: notion, alt: "notion" },
    { src: photoshop, alt: "photoshop" },
    { src: aftereffect, alt: "aftereffect" },
    { src: figma, alt: "figma" },
    { src: illustrator, alt: "illustrator" },
    { src: premiere, alt: "premiere" },
    { src: github, alt: "github" },
    { src: notion, alt: "notion" },
    { src: photoshop, alt: "photoshop" },
    { src: aftereffect, alt: "aftereffect" },
    { src: figma, alt: "figma" },
    { src: illustrator, alt: "illustrator" },
    { src: premiere, alt: "premiere" },
    { src: github, alt: "github" },
    { src: notion, alt: "notion" },
    
]

export const LogoAnimation = () => {
    return(
        <div className="py-8 bg-white opacity-100 overflow-hidden">
            <div className="container mx-auto">
                <div className="overflow-hidden[mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                <motion.div
                className="flex gap-14 flex-none pr-14"
                animate={{
                    translateX:'-50%',
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {images.map((image, index) => (
                        <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        height={30}
                        ></Image>
            ))}

                </motion.div>
                </div>

            </div>
        </div>
    );
};