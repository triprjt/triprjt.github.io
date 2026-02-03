// src/app/webinar/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import WebinarClientView from "./WebinarClientView";

// --- HELPER FUNCTIONS ---

// 1. Converts "February 8, 2026" -> "8th Feb"
const formatShortDate = (dateStr: string): string => {
  if (!dateStr) return "";
  const dateObj = new Date(dateStr);
  
  // If Invalid Date, return original string
  if (isNaN(dateObj.getTime())) return dateStr;

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' }); // "Feb"

  // Ordinal suffix logic (st, nd, rd, th)
  const suffix = ["th", "st", "nd", "rd"];
  const v = day % 100;
  const ordinal = suffix[(v - 20) % 10] || suffix[v] || suffix[0];

  return `${day}${ordinal} ${month}`;
};

// 2. Converts "Sunday, 11:00 AM IST" -> "11:00 am, Sunday"
const formatShortTime = (timeStr: string): string => {
  if (!timeStr) return "";
  
  // Split "Sunday, 11:00 AM IST" by comma
  const parts = timeStr.split(',');

  if (parts.length < 2) return timeStr; // Return original if format doesn't match

  const dayName = parts[0].trim(); // "Sunday"
  
  // Extract time (e.g., "11:00 AM") using Regex to ignore "IST"
  // Looks for digits:digits followed by am/pm
  const timeMatch = parts[1].match(/(\d{1,2}:\d{2}\s?(?:AM|PM))/i);
  
  const cleanTime = timeMatch ? timeMatch[0].toLowerCase() : parts[1].trim();

  return `${cleanTime}, ${dayName}`;
};

// --- MAIN COMPONENT ---

const WEBINARS = {
  "ai-for-10x-productivity": {
    title: "AI for 10x Productivity",
    date: "Feb 1, 2026",
    time: "11:00 AM IST",
    speaker: "Stewart Bond",
    topic: "What Real-Time means for AI",
    eventType: "sunday_webinar",
  },
  "build-ai-agents-for-your-business": {
    title: "Build AI Agents & Automations for your business",
    date: "Feb 4, 2026",
    time: "9:00 PM IST",
    speaker: "Rajat",
    topic: "Next.js 15 and Beyond",
    eventType: "wednesday_webinar",
  },
};

type WebinarData = {
  title: string;
  date: string;
  time: string;
  speaker: string;
  eventType: string;
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function WebinarLandingPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;

  // 1. Validate Slug
  const baseWebinar = WEBINARS[slug as keyof typeof WEBINARS];
  if (!baseWebinar) {
    notFound(); 
  }

  // 2. Extract raw strings from URL
  const rawDate = (query.date || baseWebinar.date) as string;
  const rawTime = (query.time || baseWebinar.time) as string;

  // 3. Apply formatting
  const formattedDate = formatShortDate(rawDate);
  const formattedTime = formatShortTime(rawTime);

  // 4. Construct Data Object
  const dataForWebinarPost: WebinarData = {
    title: baseWebinar.title,
    date: formattedDate,
    time: formattedTime,
    speaker: baseWebinar.speaker,
    eventType: baseWebinar.eventType,
  };
  
  // 5. Render
  return <WebinarClientView data={dataForWebinarPost} />;
}