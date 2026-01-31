import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log the click event (no server-side fetch to avoid memory issues)
    console.log("Webinar external link click event:", body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling webinar-click event:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to record webinar click event" },
      { status: 500 }
    );
  }
}

