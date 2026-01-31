"use client";

const MeetTheFounder = () => {
  const founderAchievements = [
    { id: 1, text: "IIT Kanpur alumni" },
    { id: 2, text: "10+ years of experience" },
    { id: 3, text: "Ex-founder of an edtech company" },
    { id: 4, text: "AI consultant and coach" },
  ];

  const CardComponent = ({ text }: { text: string }) => {
    return (
      // 1. The Wrapper (Defines the shape)
      <div className="relative group rounded-xl overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        
        {/* 2. The Moving Gradient Layer (The Shiny Border) */}
        {/* We use a gradient that goes: Grey -> Highlight/Color -> Grey */}
        {/* It is placed absolutely behind the content */}
        <div 
            className="absolute inset-0 w-full h-full"
            style={{
                backgroundSize: "200% 100%",
                backgroundImage: "linear-gradient(90deg, #e4e4e7 0%, #e4e4e7 45%, var(--highlight) 50%, #e4e4e7 55%, #e4e4e7 100%)",
                animation: "borderShine 2s linear infinite"
            }}
        />

        {/* 3. The Inner Content (White Card) */}
        {/* Margin 1px to reveal the border behind it */}
        <div className="relative m-[1px] bg-white h-[calc(100%-2px)] rounded-[10px] px-4 py-4 flex items-center justify-center shadow-sm">
          <h6 className="font-heading text-base md:text-lg font-bold text-center text-zinc-900 leading-tight">
            {text}
          </h6>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full mx-auto py-16 flex justify-center items-center md:py-24 lg:py-32 bg-[var(--background)]">
      {/* Injecting the keyframes specifically for this component */}
      <style jsx global>{`
        @keyframes borderShine {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center w-full gap-12 lg:gap-20">
        
        {/* Section Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center text-headline tracking-tight">
          Meet the Founder
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          
          {/* Left: Text + Badges */}
          <div className="flex flex-col gap-8 md:gap-10 order-2 lg:order-1 items-center lg:items-start">
            {/* Main message */}
            <h2 className="font-body text-zinc-700 text-center lg:text-left text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight max-w-3xl">
              I have spent more than 10 years in the software industry and my goal isn't just to teach you AI – it's to help you think clearly about Gen AI, get confident in using Gen AI, and build skills that you'll use for life.
            </h2>

            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md lg:max-w-none">
              {founderAchievements.map((achievement) => (
                <CardComponent key={achievement.id} text={achievement.text} />
              ))}
            </div>
          </div>

          {/* Right: Founder Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-zinc-200 shadow-xl aspect-[4/5] md:aspect-[3/4] lg:aspect-square bg-zinc-100">
              <img
                src="/images/founder.jpg"
                alt="Founder portrait"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;