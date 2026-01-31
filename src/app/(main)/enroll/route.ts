import { NextRequest, NextResponse } from "next/server";
import dotenv from 'dotenv'
dotenv.config();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, jobRole, comments } = body;

    // Validate required fields
    if (!name || !email || !phone || !jobRole) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Google Apps Script Web App URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    console.log("GOOGLE_SCRIPT_URL", GOOGLE_SCRIPT_URL);

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare data for Google Sheets
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("jobRole", jobRole);
    formData.append("comments", comments || "");
    formData.append("timestamp", new Date().toISOString());

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    // Note: With no-cors mode, we can't read the response
    // But the data should still be submitted to Google Sheets
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
