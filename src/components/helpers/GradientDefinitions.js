import React from "react";

export const FireGradient = () => {
    return (
        <svg width="0" height="0">
            <radialGradient id="fireGradient" r="150%" cx="30%" cy="107%">
                <stop stopColor="#fdf497" offset="0" />
                <stop stopColor="#fdf497" offset="0.05" />
                <stop stopColor="#fd5949" offset="0.45" />
                <stop stopColor="#d6249f" offset="0.6" />
                <stop stopColor="#285AEB" offset="0.9" />
            </radialGradient>
        </svg>
    );
};

export const PrimaryGradient = () => {
    return (
        <svg width="0" height="0">
            <linearGradient id="primaryGradient" gradientTransform="rotate(80)">
                <stop offset="0%" stopColor="#2CDFCD" />
                <stop offset="100%" stopColor="#36E4FF" />
            </linearGradient>
        </svg>
    );
};

export const GreyGradient = () => {
    return (
        <svg width="0" height="0">
            <linearGradient id="greyGradient" gradientTransform="rotate(65)">
                <stop offset="0%" stopColor="#4D4D57" />
                <stop offset="100%" stopColor="#4D4D57" />
            </linearGradient>
        </svg>
    );
};
