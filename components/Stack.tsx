'use client'
import React from "react"
import { FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { SiFlutter } from "react-icons/si"


const stackItems = [
    {id:1, name: 'React', icon: FaReact, color:'#61DAFB'},
    {id:2, name: 'Node.js', icon: IoLogoNodejs, color:'#339933'},
    {id:3, name: 'Typescript', icon: SiTypescript, color:'#3178C6'},
    {id:4, name: 'Next.js', icon: TbBrandNextjs, color:'#000000'},
    {id:5, name: 'Flutter', icon: SiFlutter, color:'#0ea5e9'},
]

export const Stack = () => {
    return (
        <section className="py-8 glass place-content-center" id="stack">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-5xl text-black-200 font-bold mb-4">My Stack</h2>
                <div className=" flex items-center justify-center flex-col rounded-xl p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {stackItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-center flex-col rounded-xl p-4 bg-gray-700 shadow-lg transition-transform duration-300"
                        >
                            {React.createElement(item.icon, {
                                className: "w-16 h-16 mb-2",
                                style: { color: item.color }
                            })}
                            <p className="text-white font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}