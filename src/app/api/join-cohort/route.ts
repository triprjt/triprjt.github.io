import { NextRequest, NextResponse } from "next/server";

async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 });
  }
}

export { POST };