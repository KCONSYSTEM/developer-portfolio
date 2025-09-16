// import Image from 'next/image';
// import Link from 'next/link';
// import { FaPlay } from 'react-icons/fa';
// import placeholder from '/public/png/placeholder.png';

// const SingleProject = ({ project }) => {
//   const { name, description, demo, image, tools } = project;

//   return (
//     <div className='group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-3 md:px-8 py-[1.4rem] bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border border-[#1a1443]'
//     >
//       {/* Background SVG */}
//       <div className="absolute left-0 top-0 flex justify-center opacity-40">
//         {/* (kept your SVG here unchanged) */}
//       </div>

//       <div className='flex flex-col items-center justify-between w-full h-full'>
//         {/* Title */}
//         <h2 className='text-[#EFF3F4] font-semibold text-[1.525rem] leading-[110%] text-center capitalize'>
//           {name}
//         </h2>

//         {/* Image */}
//         <div className="p-2">
//           <Image
//             src={image ? image : placeholder}
//             alt={name}
//             width={1080}
//             height={720}
//             className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg"
//           />
//         </div>

//         {/* Live Link only (removed Code button) */}
//         <div className="flex items-center justify-start w-full">
//           <Link
//             href={demo}
//             target='_blank'
//             className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 decoration-clone cursor-pointer no-underline delay-[0.3s]">
//             <FaPlay />
//           </Link>
//         </div>
//       </div>

//       {/* Description (centered now) */}
//       <p className="absolute w-[90%] md:w-[85%] min-h-[150px] flex items-center justify-center text-center p-6 leading-[140%] rounded-[0_20px_20px_0] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f0b24] text-[#EFF3F4] text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         {description}
//       </p>
//       <div className='absolute w-auto  text-[0.8rem] flex flex-wrap gap-2 justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-300 p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-4 bg-[#0f0b24] text-[#EFF3F4]'>
//         {tools?.map((tag, id) => (
//           <span
//             key={id}
//             className='px-2 py-1 bg-[#231d4b] rounded-md text-xs font-medium whitespace-nowrap'
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SingleProject;


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
          className="object-cover pt-5 px-2"
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

