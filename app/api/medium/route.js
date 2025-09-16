import Parser from "rss-parser";
import { NextResponse } from "next/server";
import axios from "axios";

// Using require for cheerio as it can be more stable in some environments
const cheerio = require('cheerio');

export async function GET() {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://medium.com/feed/@blogs-mohammadfahad"
        );

        const postsWithThumbnails = await Promise.all(
            feed.items.slice(0, 6).map(async (item) => {
                let thumbnail = "/png/placeholder.png";

                try {
                    const { data } = await axios.get(item.link, {
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
                        }
                    });

                    // Load the fetched data into cheerio
                    const $ = cheerio.load(data);

                    const ogImage = $('meta[property="og:image"]').attr('content');

                    if (ogImage) {
                        thumbnail = ogImage;
                    }

                } catch (err) {
                    console.error(`Failed to fetch and parse HTML for ${item.title}:`, err);
                }

                return {
                    title: item.title,
                    link: item.link,
                    date: item.pubDate,
                    description: item.contentSnippet,
                    thumbnail,
                };
            })
        );

        return NextResponse.json(postsWithThumbnails);
    } catch (err) {
        console.error("Error fetching RSS feed:", err);
        return NextResponse.json([], { status: 500 });
    }
}