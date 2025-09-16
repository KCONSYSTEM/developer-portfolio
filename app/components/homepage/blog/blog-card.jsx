"use client";
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';



function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
              <Image
                  src={blog?.thumbnail}
                  height={1080}
                  width={1920}
                  alt={blog?.title ? blog.title : "Blog Image"}
                  className='h-full w-full group-hover:scale-110 transition-all duration-300'
              />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
                  <p>{timeConverter(blog.date)}</p>
          <div className="flex items-center gap-3">
                      <p className="flex items-center gap-1">
              <BsHeartFill />
                          <span>{blog.public_reactions_count}</span>
            </p>

          </div>
        </div>
              <Link target='_blank' href={blog.link}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
        </Link>
              {/* <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p> */}
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
              <div className="">
                  <Link target='_blank' href={blog.link}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
              </div>
      </div>
    </div>
  );
};

export default BlogCard;
// import Image from "next/image";
// const BlogCard = ({ blog }) => {
//     return (
//         <a
//             href={blog.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-5 bg-[#1a1443] rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between"
//         >
//             <div>
//                 <Image
//                     src={blog?.thumbnail}
//                     height={1080}
//                     width={1920}
//                     alt={blog?.title || "Blog Image"}
//                     className='h-full w-full group-hover:scale-110 transition-all duration-300'
//                 />
//                 <h3 className="text-lg font-semibold">{blog.title}</h3>
//                 <p className="text-sm text-gray-400 mt-2">{blog.description}</p>
//             </div>
//             <span className="text-xs text-gray-500 mt-4">
//                 {new Date(blog.date).toDateString()}
//             </span>
//         </a>
//     );
// };

// export default BlogCard;
