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
  const testimonials = [
    {
      id: 1,
      title: "Exceeded Expectations",
      description:
        "A true builder. Delivered our project on time and exceeded expectations!",
      name: "Alex B.",
      avatar: "/avatar1.png",
      initials: "AB",
    },
    {
      id: 2,
      title: "Highly Recommended",
      description:
        "Innovative, reliable, and a pleasure to work with. Highly recommended!",
      name: "Jamie S.",
      avatar: "/avatar2.png",
      initials: "JS",
    },
    {
      id: 3,
      title: "Great Communication",
      description:
        "Clear communication, excellent technical skills, and delivered amazing results.",
      name: "Sarah M.",
      avatar: "/avatar3.png",
      initials: "SM",
    },
  ];

  const aiPortfolio = [
    {
      id: 1,
      title: "Blog meme generator",
      description:
        "Paste your blog content and automaticallyinsert memes from a directory of 1000 +memes ",
    },
    {
      id: 2,
      title: "Charchagram",
      description:
        "A place to discuss root level issues and know your elected representatives",
    },
    {
      id: 3,
      title: "Title 3",
      description:
        "Paste your blog content and automaticallyinsert memes from a directory of 1000 +memes ",
    },
  ];
  const cardsIntroSection = [
    { icon: null, title: "5+ years", subTitle: "Built many projects" },
    { icon: null, title: "AI Focused", subTitle: "Specialized in AI products" },
    { icon: null, title: "Open Source", subTitle: "Contributor & maintainer" },
  ];
  const buttons = [
    { id: 1, buttonText: "Work with me", buttonLink: "#contact" },
    { id: 2, buttonText: "See my work", buttonLink: "#mywork" },
  ];
  const whoamiContent = [
    {
      id: 1,
      title: "Founder",
      subtitle: " Scaled to 2000+ users, shutdown due to funding issues",
    },
    {
      id: 2,
      title: "Technical Content and growth marketing",
      subtitle: " Scaled to 2000+ users, shutdown due to funding issues",
    },
    {
      id: 3,
      title: "Startup consultant",
      subtitle: " Scaled to 2000+ users, shutdown due to funding issues",
    },
    {
      id: 4,
      title: "AI developer",
      subtitle: " Scaled to 2000+ users, shutdown due to funding issues",
    },
  ];
  return (
    <main className="flex flex-col items-center w-4/5 mx-auto">
      {/* Intro Section */}
      <section
        id="intro"
        className="flex flex-col items-center gap-6 text-center w-full pt-14 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-6 sm:px-6 md:px-12 lg:px-20 "
      >
        <div className="container mx-auto max-w-6xl">
          <h1 className=" text-left animate-on-scroll font-outfit font-bold text-4xl sm:text-5xl md:text-6xl leading-tight gradient-text max-w-4xl mb-8 pb-2 break-words animated ">
            Get first users, scale revenue, & automate growth{" "}
          </h1>
          <p className=" text-left animate-on-scroll delay-200 font-grotesk text-lg md:text-xl text-[#151515]/80 max-w-3xl mb-10 animated ">
            I specialise in building new products, acquiring the first users,
            and scaling brands with data-driven marketing and AI-powered
            automation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-4 mb-20 mx-auto">
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
        className="flex flex-col w-full items-center justify-center px-6 md:px-12 lg:px-20 gap-4 py-10 "
      >
        <div className="container mx-auto max-w-6xl ">
          <div className="text-center">
            <h2 className="text-center text-3xl md:text-5xl mb-6 font-semibold">
              Who I Am
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
            <div className="grid grid-cols-1 gap-6">
              <p className="text-muted-foreground w-full text-left mb-6">
                I'm a builder, developer, and lifelong learner. My journey spans
                startups, open source, and AI-driven products. I love turning
                ideas into reality.
              </p>
              {whoamiContent.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {item.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center items-center h-full w-full p-[14px]">
              <div className="p-6 border rounded-2xl flex flex-col items-center">
                <img
                  src="https://blog-meme.blr1.digitaloceanspaces.com/profilepic.jpg"
                  alt="Profile picture"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="text-center">
                  <h1 className="font-outfit font-bold text-2xl">
                    Rajat Tripathi
                  </h1>
                  <p className="text-[#151515]/70">AI developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Builder Section */}
      <section
        id="mywork"
        className="flex flex-col w-full items-center justify-center px-6 md:px-12 lg:px-20 min-h-screen gap-4 "
      >
        <div className="container mx-auto max-w-6xl ">
          <div className="text-center">
            <h2 className="text-center text-3xl md:text-5xl mb-6 font-semibold">
              AI Builder portfolio
            </h2>
          </div>
          <p className="text-muted-foreground w-full text-left mb-10">
            I specialize in integrating AI into real-world solutions, from
            chatbots to automation tools. My focus: making AI accessible and
            useful for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aiPortfolio.map((ele, id) => (
              <Card
                key={ele.id}
                className="flex-1 glass-card p-6 transition-transform duration-200 "
              >
                <div className="min-h[200px] sm:min-h-[300px] md:min-h-[300px] grid grid-rows-[auto_1fr_auto] ">
                  <h1 className="text-xl font-semibold text-center min-h-[70px] ">
                    {ele.title}
                  </h1>
                  <p className="text-muted-foreground my-auto ">
                    {ele.description}
                  </p>

                  <Button variant="ghost" className="w-full mt-4">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project
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
                        className="lucide lucide-external-link"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="blog"
        className="flex flex-col items-center justify-center max-w-6xl gap-4 w-full px-6 py-6 md:px-12 lg:px-20 md:py-12 lg:py-16 gap-4 "
      >
        <div className="container mx-auto max-w-6xl ">
          <div className="text-center">
            <h2 className="text-center text-3xl md:text-5xl mb-6 mt-10 font-semibold">
              Testimonials
            </h2>
          </div>
          <div className="sm:hidden w-full">
            <Carousel>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <Card className="w-full">
                      <CardHeader className="flex flex-row items-center gap-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{testimonial.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="italic">
                          &ldquo;{testimonial.description}&rdquo;
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="w-full min-h-[200px]">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    &ldquo;{testimonial.description}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section
        id="contact"
        className="flex flex-col items-center justify-center gap-4 w-full"
      >
        <div className="container mx-auto max-w-6xl mt-10 mb-4 text-center">
          <h2 className="text-2xl font-semibold mb-6 ">Let's Work Together</h2>
          <p className="text-muted-foreground mb-10 max-w-3/4 md:max-w-1/2 lg:max-w-1/2 mx-auto ">
            Interested in collaborating or have a project in mind? Reach out and
            let's build something amazing.
          </p>
          <Button asChild>
            <a href="mailto:your@email.com">Contact Me</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
