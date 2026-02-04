import React from "react";
import WorkshopClientView from "./workshopClientView";

export default function WorkshopLandingPage() {
  const data = {
    title: "Build your first AI automation",
    date: "Feb 5, 2026",
    time: "8-10 PM IST",
    speaker: "Rajat Tripathi",
    eventType: "workshop",
  };

  return <WorkshopClientView data={data} />;
}
