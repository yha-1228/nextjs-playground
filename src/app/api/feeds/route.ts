import { getNoteFeed } from "@/app/api-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const feed = await getNoteFeed();

    return NextResponse.json(feed, {
      headers: {
        // キャッシュ無効化
        "Cache-Control": "no-store",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("RSS parse error:", error);
    return new NextResponse("Failed to fetch or parse RSS", { status: 500 });
  }
}
