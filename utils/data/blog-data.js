

export async function getMediumPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/medium`, {
        next: { revalidate: 3600 }, // cache for 1 hour
    });
    return res.json();
}
