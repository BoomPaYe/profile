'use client'
import React, { useState} from "react"
import Image from "next/image"
import borport from "@/assets/borport concept design.png"
import tedtoy from "@/assets/phone mockup.png"
import magnu5 from "@/assets/official.png"

const projects = [
    {id:1,
     year:2023,
     title: 'Ted Toy UI ',
     description: 'is a mobile application that allow users to swap their toys.',
     image: tedtoy,
    },
    {id:2,
        year:2024,
        title: 'Magnu5',
        description: 'Volunteer as Graphic Designer in Fashion Fusion event.',
        image: magnu5,
       },
     {id:3,
        year:2024,
        title: 'BorPort',
        description: 'is a web application that allow users to booking their trips via online and work as a team with Tan Porsenghong.',
        image: borport,
       },
]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

    return(
        <section id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

             <div>

            <h2 className="text-6xl font-bold mb-10">Recently <span className="text-purple-400">Projects</span></h2>
        {projects.map((project) => (
            <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer mb-8 group"
            >
                <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                ${selectedProject.id === project.id ? 'text-gray-200': ''} duration-300`}>
                    {project.title}
                </h3>
                {selectedProject.id === project.id &&(
                    <div className="border-b-2 border-gray-200 my-4"></div>
                )}
                {selectedProject.id === project.id &&(
                    <p className="text-gray-400 transition-all duration-500 ease-in-out">
                        {project.description}
                    </p>
                )}
            </div>
        ))}
        </div>
           

        <Image
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
        ></Image>
        </div>
        </section>
    )
}

