"use client"
import Image from "next/image";
import { Button } from "@/app/(main)/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/(main)/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/(main)/components/ui/avatar";
import "./page.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/(main)/components/ui/carousel";
import Flyer from "./Flyer";
import FAQ from "./FAQ";
import WhoShouldJoin from "./whoshouldjoin";
import MeetTheFounder from "./meetTheFounder";
import SocialProofSection from "./SocialProofSection";
import CommunityTestimonials from "./Testimonials";
import WhatdoWeOffer from "./AnimationContainer";
import ReadyToJoin from "./ReadyToJoin";
import BootcampHeader from "./bootcamp";
// import BootcampComponent from "./bootcamp/page";
export default function Home() {

  return (
    <main className="min-h-[90vh] w-full full-bleed-dark">
      <section className=" full-bleed-dark">
        <Flyer />
      </section>      
      <section className="full-bleed-section full-bleed-dark">
        <BootcampHeader />
      </section>
      <section className="full-bleed-section full-bleed-dark">
        <WhoShouldJoin />
      </section>
      <section className="full-bleed-section full-bleed-light">
        <MeetTheFounder />
      </section>
      <section className="full-bleed-section full-bleed-dark">
        <SocialProofSection />
      </section>
      <section className=" full-bleed-light">
        <CommunityTestimonials />
      </section>
      <section className="full-bleed-section full-bleed-dark">
        <FAQ />
      </section>
      {/* <section className="full-bleed-section full-bleed-light"> */}
        {/* <ReadyToJoin /> */}
      {/* </section>  */}
    </main>
  );
}
