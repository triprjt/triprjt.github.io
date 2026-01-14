import { Button } from "@/components/ui/button";

const Flyer = () => {

    const heading = "Are you ready to level up AI in 2026?";
    const subheading = "Join us to build real world AI skills";
    const description = "Learn. Build. Grow 10x";

    return (
        <div className="w-full h-full md:h-[80vh] grid grid-cols-1 md:grid-cols-2 border border-red-500 gap-10 md:gap-1">
            <div className="flex flex-col gap-10">
                <h1 className="text-headline-flyer ">{heading}</h1>
                <h2>{subheading}</h2>
                <p className="text-sub-headline-flyer">{description}</p>
                <div className="flex flex-row gap-8 justify-center my-auto items-center">
                    <Button className="bg-primary text-white border secondary-button">{`Start strong  >`}</Button>
                    <Button className="bg-highlight text-white primary-button">Enroll now</Button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="relative h-80 md:h-96 bg-card-background/30 rounded-2xl overflow-hidden border border-highlight/20">
                        <svg
                            viewBox="0 0 1000 400"
                            preserveAspectRatio="xMidYMid meet"
                            className="absolute inset-0 w-full h-full"
                        >
                            {/* Very faint grid (optional) */}
                            <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                                <line x1="0" y1="100" x2="1000" y2="100" />
                                <line x1="0" y1="200" x2="1000" y2="200" />
                                <line x1="0" y1="300" x2="1000" y2="300" />
                            </g>

                            {/* The exponential-ish line – adjust points for your data */}
                            <polyline
                                points="
          50,350    150,320   250,280   350,220
          450,160   550,110   650,70    750,40
          850,20    950,10"
                                fill="none"
                                stroke="var(--highlight)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="animate-draw"
                            />

                            {/* Optional subtle area fill */}
                            <polygon
                                points="
          50,350 150,320 250,280 350,220
          450,160 550,110 650,70  750,40
          850,20  950,10  950,400 50,400"
                                fill="url(#fade)"
                                opacity="0.15"
                            />
                            <defs>
                                <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="var(--highlight)" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>

                            {/* Year labels (2026 → 2035) */}
                            <g fill="var(--card-paragraph)" fontSize="14" textAnchor="middle">
                                <text x="50" y="380">2026</text>
                                <text x="950" y="380">2035</text>
                                {/* Optional mid labels */}
                                <text x="500" y="380">~2030</text>
                            </g>

                            {/* Trillion markers (right side) */}
                            <g fill="var(--card-paragraph)" fontSize="14" textAnchor="end">
                                <text x="980" y="60">$0.3T</text>
                                <text x="980" y="360">$5T</text>
                            </g>
                        </svg>

                        {/* Optional title above/below chart */}
                        <div className="absolute top-4 left-6 text-sm opacity-70">
                            Global AI Market Size Forecast
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flyer;