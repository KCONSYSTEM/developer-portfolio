// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { personalData } from '../utils/data/personal-data'
import { projectsData } from '../utils/data/projects-data'

export default function Home() {
    return (
        <>
            <Head>
                <title>{personalData.name} | Portfolio</title>
                <meta
                    name="description"
                    content="Frontend Web Developer Portfolio - Mohammad Fahad"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main className="min-h-screen font-sans bg-gray-50 text-gray-900">
                {/* Hero Section */}
                <section className="text-center py-20 bg-gradient-to-b from-gray-100 to-white">
                    <Image
                        src={personalData.profile}
                        alt={personalData.name}
                        width={150}
                        height={150}
                        className="mx-auto rounded-full"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold mt-6">{personalData.name}</h1>
                    <p className="text-xl md:text-2xl mt-2">{personalData.designation}</p>
                    <p className="mt-4 max-w-xl mx-auto">{personalData.description}</p>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 px-6 md:px-20 bg-white">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <p>{personalData.description}</p>
                    <p className="mt-4">
                        <strong>Email:</strong> <a href={`mailto:${personalData.email}`} className="text-blue-600">{personalData.email}</a>
                    </p>
                    <p>
                        <strong>Phone:</strong> <a href={`tel:${personalData.phone}`} className="text-blue-600">{personalData.phone}</a>
                    </p>
                    <p>
                        <strong>Location:</strong> {personalData.address}
                    </p>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 px-6 md:px-20 bg-gray-50">
                    <h2 className="text-3xl font-bold mb-6">Skills</h2>
                    <ul className="flex flex-wrap gap-4">
                        {personalData.skills?.map((skill, idx) => (
                            <li key={idx} className="px-4 py-2 bg-blue-100 rounded-lg">{skill}</li>
                        ))}
                    </ul>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 px-6 md:px-20 bg-white">
                    <h2 className="text-3xl font-bold mb-6">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {projectsData.map((project) => (
                            <div key={project.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                <p className="mb-2">{project.description}</p>
                                <p className="mb-2"><strong>Tools:</strong> {project.tools.join(', ')}</p>
                                <p className="mb-2"><strong>Role:</strong> {project.role}</p>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-6 md:px-20 bg-gray-50">
                    <h2 className="text-3xl font-bold mb-6">Contact</h2>
                    <p>Feel free to reach out to me via email or phone:</p>
                    <ul className="mt-4">
                        <li>Email: <a href={`mailto:${personalData.email}`} className="text-blue-600">{personalData.email}</a></li>
                        <li>Phone: <a href={`tel:${personalData.phone}`} className="text-blue-600">{personalData.phone}</a></li>
                        <li>Location: {personalData.address}</li>
                    </ul>
                </section>
            </main>
        </>
    )
}

