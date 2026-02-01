import { NextRequest, NextResponse } from "next/server";
// import dotenv from 'dotenv'; // Next.js handles .env automatically, usually not needed here but keep if you prefer.
// dotenv.config();

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

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    const ZOHO_FLOW_URL = process.env.ZOHO_FLOW_URL;

    if (!ZOHO_FLOW_URL || !GOOGLE_SCRIPT_URL) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // --- 1. PREPARE DATA FOR GOOGLE SHEETS (x-www-form-urlencoded) ---
    const sheetData = new URLSearchParams();
    sheetData.append("name", name);
    sheetData.append("email", email);
    sheetData.append("phone", phone);
    sheetData.append("jobRole", jobRole);
    sheetData.append("comments", comments || "");
    sheetData.append("registeredEmailSent", "no");
    sheetData.append("timestamp", new Date().toISOString());

    // --- 2. PREPARE DATA FOR ZOHO FLOW (JSON) ---
    // FIXED: Created a plain object here instead of using URLSearchParams

    const nameParts = (name || "").trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "-"; // Use hyphen if no last name

    const zohoPayload = {
        name: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        jobRole: jobRole,
        comments: comments || ""
    };

    // --- SEND TO GOOGLE SHEETS ---
    const sheetPromise = fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: sheetData.toString(),
    });

    // --- SEND TO ZOHO FLOW ---
    // FIXED: passing the plain object zohoPayload
    const zohoPromise = fetch(ZOHO_FLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zohoPayload),
    });

    // Run them in parallel for speed
    await Promise.all([sheetPromise, zohoPromise]);

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