// export const blogsData = [
//     {
//         id: 1,
//         title: "How I Built a Full-Stack Todo App",
//         description:
//             "A walkthrough of building a full-stack Todo app using React, Node.js, Express, and MongoDB with JWT authentication.",
//         cover_image: "/images/blogs/todo-app.png", // store an image in /public/images/blogs
//         url: "https://yourbloglink.com/todo-app",
//         published_at: "2025-07-10",
//     },
//     {
//         id: 2,
//         title: "Improving Performance in React Apps",
//         description:
//             "Tips and tricks for optimizing React apps, from code splitting to memoization and lazy loading.",
//         cover_image: "/images/blogs/react-performance.png",
//         url: "https://yourbloglink.com/react-performance",
//         published_at: "2025-08-05",
//     },
//     {
//         id: 3,
//         title: "Frontend Interview Prep Guide",
//         description:
//             "A collection of my study notes, questions, and coding challenges that helped me prepare for senior frontend roles.",
//         cover_image: "/images/blogs/interview-prep.png",
//         url: "https://yourbloglink.com/frontend-prep",
//         published_at: "2025-08-25",
//     },
// ];


export async function getMediumPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/medium`, {
        next: { revalidate: 3600 }, // cache for 1 hour
    });
    return res.json();
}
