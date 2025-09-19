
"use client";
import { useState } from "react";
import Image from "next/image";

const SingleProject = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden bg-[#1a1443] text-white">
      {/* Carousel */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 flex-shrink-0">
        <Image
          src={project.images[currentIndex]}
          alt={project.title || "Project Image"}
          fill
          loading="lazy"
          className="object-cover object-center pt-5 px-2"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />


        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70"
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {project.images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold  mt-5">Name: {project.name}</h3>
        <strong className="text-l font-semibold mb-2">Role: {project.role}</strong>
        <p className="flex-grow text-sm text-gray-300">Details: {project.description}</p>

        {/* Skills (already styled carousel) */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tools.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-violet-600/20 border border-violet-500 text-violet-300 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="px-4 py-2 rounded bg-violet-600 hover:bg-violet-700 text-sm"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-800 text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

