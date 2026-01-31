"use client";

import { useState, useEffect } from "react";

const Offer = ({ onClose }: { onClose: () => void }) => {
    const message = "Register for the next webinar on Sunday, 11:00 AM IST"

    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const getNextSunday = () => {
        const now = new Date();

        // IST is UTC+5:30, so we need to work in IST timezone
        // Get current time in IST by adding 5.5 hours to UTC
        const istOffsetMs = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
        const nowUTC = now.getTime();
        const nowIST = new Date(nowUTC + istOffsetMs);

        // Get current day, hour, and minutes in IST
        const currentDayIST = nowIST.getUTCDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const currentHourIST = nowIST.getUTCHours();
        const currentMinutesIST = nowIST.getUTCMinutes();

        // Create a date for 11:00 AM IST today
        const todayAt11AMIST = new Date(nowIST);
        todayAt11AMIST.setUTCHours(11, 0, 0, 0);
        const todayAt11AMUTC = todayAt11AMIST.getTime() - istOffsetMs;

        // If today is Sunday and it's before 11:00 AM IST, use today
        if (currentDayIST === 0 && (currentHourIST < 11 || (currentHourIST === 11 && currentMinutesIST === 0))) {
            return new Date(todayAt11AMUTC);
        }

        // Calculate days until next Sunday
        // If today is Sunday (and past 11 AM) or any other day, find next Sunday
        const daysUntilSunday = currentDayIST === 0 ? 7 : (7 - currentDayIST);
        const nextSundayIST = new Date(nowIST);
        nextSundayIST.setUTCDate(nowIST.getUTCDate() + daysUntilSunday);
        nextSundayIST.setUTCHours(11, 0, 0, 0);

        // Convert back to UTC for the Date object
        const nextSundayUTC = nextSundayIST.getTime() - istOffsetMs;
        return new Date(nextSundayUTC);
    };

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const targetDate = getNextSunday();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeRemaining({ days, hours, minutes, seconds });
            } else {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    const cardForTime = (timeValue: string, timeLabel: string) => {
        return (
            <div className="flex items-center justify-center timer-card gap-1">
                <span className="timeValue">{timeValue}</span>
                <span className="text-white text-xs md:text-sm font-normal uppercase">{timeLabel}</span>
            </div>
        )
    }
    const closeOffer = () => {
        onClose();
    }
    return (
        <div className="flex items-center justify-center">
            <div className="relative sticky top-0 z-10 flex flex-col w-full md:flex-row justify-center items-center gap-3 md:gap-2 ">
                <span className="text-white text-sm text-center w-[100%] md:w-full md:text-xl font-medium uppercase">{message}</span>
                <div className="flex flex-row w-[80%] md:w-full items-center justify-center gap-3 text-black">
                    {cardForTime(timeRemaining.days.toString(), "days")}
                    {cardForTime(timeRemaining.hours.toString(), "hours")}
                    {cardForTime(timeRemaining.minutes.toString(), "minutes")}
                    {cardForTime(timeRemaining.seconds.toString(), "seconds")}
                </div>
                {/* Close button - top right on mobile, inline on desktop */}

                {/* <a className="border border-white rounded-md px-2 py-4 text-white text-sm font-normal uppercase">Register</a> */}
            </div>
            <div
                className="relative h-fit p-2 md:p-4 md:absolute md:top-[-10] md:right-[-10] md:relative md:top-auto md:right-auto border border-black rounded-full p-2 cursor-pointer border border-white"
                aria-label="Close offer"
                onClick={closeOffer}
            >
                <svg
                    className="w-4 h-4 md:w-6 md:h-6"
                    fill="black"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Offer;