"use client";

import { useState } from "react";
import Offer from "./Offer";

export const OfferWrapper = () => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return null;
    }

    return (
        <header className="header-offer">
            <Offer onClose={() => setIsOpen(false)} />
        </header>
    );
};
