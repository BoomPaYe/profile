'use client'

const experiences = [
    {id: '01', title: 'Volunteer as Graphic Designer', description:'Using Adobe Photoshop and Illustrator'},
    {id: '02', title: 'BorPort Website', description:'Using Next.js framework, tailwind css and backend we use prisma, node.js and supabase '},
    {id: '03', title: 'Flutter Project', description:'Using Dart language and json-server'},
    {id: '04', title: 'BorPort Commercial Video', description:'Using Adobe Illustrator for character and Adobe After Effect to animate'},
]


export const Experience = () => {
    
    return (
    <section className="text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                <h2 className="text-6xl text-white font-extrabold top-20">Works</h2>
            </div>

            <div className="md:w-3/4">
                {experiences.map(experience => (
                    <div key={experience.id} className="mb-16 flex items-start">
                        <div className="text-purple-300 font-bold text-5xl mr-6">
                            {experience.id}
                        </div>
                        <div className="ml-4"> {/* Added margin-left for spacing */}
                            <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
}