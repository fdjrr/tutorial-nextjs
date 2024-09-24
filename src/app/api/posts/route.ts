import { posts } from "../../data/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    if (userId) {
        const postsFilter = posts.filter((p) => p.userId === parseInt(userId));

        return NextResponse.json(postsFilter);
    }

    return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
    const post = await request.json();

    const newPost = {
        id: posts.length + 1,
        ...post,
    };

    posts.push(newPost);

    return Response.json(posts, {
        status: 201,
    });
}
