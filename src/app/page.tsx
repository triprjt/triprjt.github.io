"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import "./page.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Flyer from "./Flyer";
import FAQ from "./FAQ";
import Bootcamp from "./bootcamp";
import WhoShouldJoin from "./whoshouldjoin";
export default function Home() {

  return (
    <main className="min-h-[90vh] w-full">
      <section className="full-bleed-section full-bleed-dark">
        <Flyer />
      </section>
      <section className="full-bleed-section full-bleed-dark">
        <Bootcamp />
      </section>
      <section className="full-bleed-section full-bleed-dark">
        <WhoShouldJoin />
      </section>
      <section className="full-bleed-section full-bleed-light">
        <FAQ />
      </section>
    </main>
  );
}
