import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import "./page.css";
export default function Home() {
  const glassmorphismStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1)",
    backdropFilter: "blur(12px)",
    overflow: "hidden",
    borderRadius: "1rem",
    borderWidth: "1px",
    borderColor: "rgba(255, 255, 255, 0.6)",
  };

  const cardsIntroSection = [
    { icon: null, title: "5+ years", subTitle: "Built many projects" },
    { icon: null, title: "AI Focused", subTitle: "Specialized in AI products" },
    { icon: null, title: "Open Source", subTitle: "Contributor & maintainer" },
  ];
  const buttons = [
    { id: 1, buttonText: "Work with me", buttonLink: "#contact" },
    { id: 2, buttonText: "See my work", buttonLink: "#mywork" },
  ];
  return (
    <main className="flex flex-col items-center w-4/5 mx-auto">
      {/* Intro Section */}
      <section
        id="intro"
        className="flex flex-col items-center gap-6 text-center w-full min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 border border-red-400"
      >
        <div className="container mx-auto max-w-6xl">
          <h1 className=" text-left animate-on-scroll font-outfit font-bold text-4xl sm:text-5xl md:text-6xl leading-tight gradient-text max-w-4xl mb-8 pb-2 break-words animated border border-red-400">
            Get first users, scale revenue, & automate growth{" "}
          </h1>
          <p className=" text-left animate-on-scroll delay-200 font-grotesk text-lg md:text-xl text-[#151515]/80 max-w-3xl mb-10 animated border border-red-400">
            I specialise in building new products, acquiring the first users,
            and scaling brands with data-driven marketing and AI-powered
            automation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-4 mb-20 mx-auto border border-red-300">
            {buttons.map((btn, key) => (
              <Button asChild key={btn.id}>
                <a className="flex" href={btn.buttonLink}>
                  {btn.buttonText}
                  {key === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link ml-2"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  )}
                </a>
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cardsIntroSection.map((card, idx) => (
              <Card
                key={idx}
                className="flex-1 glass-card p-6"
                style={glassmorphismStyle}
              >
                <CardHeader>
                  {/* You can add an icon here if desired */}
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {card.subTitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Cards Row */}

        {/* Buttons Row */}
      </section>

      {/* Who I Am Section */}
      <section
        id="whoami"
        className="flex flex-col items-center justify-center gap-4 w-full h-screen border border-red-400"
      >
        <h2 className="text-2xl font-semibold">Who I Am</h2>
        <p className="text-muted-foreground max-w-lg text-center">
          I'm a builder, developer, and lifelong learner. My journey spans
          startups, open source, and AI-driven products. I love turning ideas
          into reality.
        </p>
      </section>

      {/* AI Builder Section */}
      <section
        id="mywork"
        className="flex flex-col items-center justify-center gap-4 w-full h-screen"
      >
        <h2 className="text-2xl font-semibold">AI Builder</h2>
        <p className="text-muted-foreground max-w-lg text-center">
          I specialize in integrating AI into real-world solutions, from
          chatbots to automation tools. My focus: making AI accessible and
          useful for everyone.
        </p>
      </section>

      {/* Testimonials Section */}
      <section
        id="blog"
        className="flex flex-col items-center justify-center gap-4 w-full h-screen"
      >
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Card className="w-full max-w-xs">
            <CardHeader className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src="/avatar1.png" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <CardTitle>Alex B.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                "A true builder. Delivered our project on time and exceeded
                expectations!"
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-xs">
            <CardHeader className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src="/avatar2.png" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <CardTitle>Jamie S.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                "Innovative, reliable, and a pleasure to work with. Highly
                recommended!"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section
        id="contact"
        className="flex flex-col items-center justify-center gap-4 w-full h-screen"
      >
        <h2 className="text-2xl font-semibold">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-lg text-center">
          Interested in collaborating or have a project in mind? Reach out and
          let's build something amazing.
        </p>
        <Button asChild>
          <a href="mailto:your@email.com">Contact Me</a>
        </Button>
      </section>
    </main>
  );
}
