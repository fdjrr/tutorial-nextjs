import { headers, cookies } from "next/headers";

export async function GET() {
    const headersList = headers();

    console.log(headersList.get("Authorization"));

    // console.log(request.cookies.get("token"));
    console.log(cookies().get("theme"));

    cookies().set("theme", "dark");

    // return NextResponse.json({ name: "John Doe" });

    return new Response("<h1>Hello, World!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "token=test123",
        },
    });
}
