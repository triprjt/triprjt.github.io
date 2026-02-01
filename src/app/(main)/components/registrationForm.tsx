"use client";

import React, { useState, useRef, useEffect } from "react";
import { Loader2, ChevronDown, CheckCircle2 } from "lucide-react";

const COUNTRY_CODES = [
    { code: "+91", country: "India" },
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
    { code: "+92", country: "Pakistan" },
    { code: "+880", country: "Bangladesh" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+977", country: "Nepal" },
    { code: "+55", country: "Brazil" },
    { code: "+27", country: "South Africa" },
    { code: "+234", country: "Nigeria" },
    { code: "+254", country: "Kenya" },
    { code: "+353", country: "Ireland" },
    { code: "+31", country: "Netherlands" },
];

export default function RegistrationForm({ webinarTitle, eventType }: { webinarTitle: string, eventType: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [phoneCountryCode, setPhoneCountryCode] = useState("+91");
    const [phoneCodeOpen, setPhoneCodeOpen] = useState(false);
    const phoneCodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (phoneCodeRef.current && !phoneCodeRef.current.contains(e.target as Node)) {
                setPhoneCodeOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        jobRole: "",
        priority: "",
        remarks: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            ...formData,
            phone: `${phoneCountryCode} ${formData.phone.trim()}`.trim(),
            eventTypeParam: eventType,
        };

        try {
            const res = await fetch("/api/enroll-webinar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            console.log("res999", res);
            if (res.ok) {
                setSubmitStatus("success");
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === "success") {
        return (
            <div className="mx-auto bg-[#161822]/80 backdrop-blur-sm border border-[#64ffda]/30 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center gap-6 min-h-[320px] animate-in fade-in duration-500">
                <div className="rounded-full bg-[#64ffda]/20 p-4 ring-4 ring-[#64ffda]/20 animate-in zoom-in-95 duration-300">
                    <CheckCircle2 className="w-14 h-14 md:w-16 md:h-16 text-[#64ffda]" strokeWidth={2} />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Thank you for registration!
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg max-w-sm mx-auto">
                        We will reach out to you shortly.
                    </p>
                </div>
                <p className="text-gray-500 text-sm">
                    Check your email for confirmation details.
                </p>
            </div>
        );
    }

    return (
        <div className=" mx-auto bg-[#161822]/80 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col gap-2 md:gap-4">
            <div className="w-full mx-auto flex flex-col gap-1 md:gap-2">
                <h2 className="text-2xl font-bold text-white mb-2">Secure your spot</h2>
                <p className="text-gray-400 text-sm mb-6">
                    Registering for: <span className="text-[#64ffda]">{webinarTitle}</span>
                </p>
            </div>
            {submitStatus === "error" && (
                <div className="rounded-lg bg-red-500/10 text-red-400 text-sm py-3 px-4">
                    Something went wrong. Please try again.
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-6">

                {/* Name */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0b0c13] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#64ffda] transition-colors"
                        placeholder="Mohit Chauhan"
                    />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#0b0c13] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#64ffda] transition-colors"
                            placeholder="mohit@work.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                        <div className="flex gap-2">
                            <div className="relative shrink-0" ref={phoneCodeRef}>
                                <button
                                    type="button"
                                    onClick={() => setPhoneCodeOpen((o) => !o)}
                                    className="w-[72px] h-[46px] flex items-center justify-between gap-1 bg-[#0b0c13] border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-[#64ffda] transition-colors cursor-pointer"
                                    aria-label="Country code"
                                    aria-expanded={phoneCodeOpen}
                                    aria-haspopup="listbox"
                                >
                                    <span>{phoneCountryCode}</span>
                                    {/* <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${phoneCodeOpen ? "rotate-180" : ""}`} /> */}
                                </button>
                                {phoneCodeOpen && (
                                    <ul
                                        role="listbox"
                                        className="absolute top-full left-0 mt-1 z-10 w-[200px] max-h-[240px] overflow-auto bg-[#0b0c13] border border-gray-700 rounded-lg py-1 shadow-xl"
                                    >
                                        {COUNTRY_CODES.map(({ code, country }) => (
                                            <li
                                                key={code}
                                                role="option"
                                                aria-selected={phoneCountryCode === code}
                                                onClick={() => {
                                                    setPhoneCountryCode(code);
                                                    setPhoneCodeOpen(false);
                                                }}
                                                className={`p-2 text-sm cursor-pointer hover:bg-[#161822] ${phoneCountryCode === code ? "text-[#64ffda] bg-[#161822]" : "text-white"}`}
                                            >
                                                {code} {country}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="flex-1 min-w-0 bg-[#0b0c13] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#64ffda] transition-colors"
                                placeholder="98765 43210"
                            />
                        </div>
                    </div>
                </div>

                {/* Job Role */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Job Role</label>
                    <input
                        type="text"
                        name="jobRole"
                        required
                        value={formData.jobRole}
                        onChange={handleChange}
                        className="w-full bg-[#0b0c13] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#64ffda] transition-colors"
                        placeholder="e.g. Product Manager, Founder..."
                    />
                </div>

                {/* Priority Dropdown */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Top priority for learning AI?
                    </label>
                    <div className="relative">
                        <select
                            name="priority"
                            required
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full bg-[#0b0c13] border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#64ffda] transition-colors cursor-pointer"
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="exploring">Just exploring stuff</option>
                            <option value="build-apps">Want to build apps with AI (non-tech)</option>
                            <option value="automations">Want to use AI automations</option>
                            <option value="job-switch">I want to upskill and then job switch to AI field</option>
                            <option value="expert">I am already an expert in AI</option>
                            <option value="business">Want to use AI in my business</option>
                        </select>
                        {/* Custom Arrow Icon */}
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Remarks */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Other Remarks (Optional)</label>
                    <textarea
                        name="remarks"
                        rows={3}
                        value={formData.remarks}
                        onChange={handleChange}
                        className="w-full bg-[#0b0c13] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#64ffda] transition-colors resize-none"
                        placeholder="Anything specific you want to learn?"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="mt-2 w-full bg-[#64ffda] hover:bg-[#52e0be] text-[#082846] font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                        </>
                    ) : (
                        "Complete Registration"
                    )}
                </button>

                <p className="text-[10px] text-gray-500 text-center">
                    Limited seats available. First come, first served.
                </p>

            </form>
        </div>
    );
}