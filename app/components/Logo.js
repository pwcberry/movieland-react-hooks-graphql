import React from "react";

const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 240">
        <defs>
            <linearGradient id="a" x1="200.71" y1="84.81" x2="352.67" y2="172.55" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fff" />
                <stop offset=".08" stopColor="#fff" stopOpacity=".96" />
                <stop offset=".22" stopColor="#fff" stopOpacity=".87" />
                <stop offset=".4" stopColor="#fff" stopOpacity=".71" />
                <stop offset=".6" stopColor="#fff" stopOpacity=".5" />
                <stop offset=".83" stopColor="#fff" stopOpacity=".22" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <clipPath id="b" transform="translate(-3 -1)">
                <path fill="none" d="M3 0h153v86H3z" />
            </clipPath>
        </defs>
        <g fill="#78B309">
            <path d="M45 196v-14h67v14zM78 196l-10 44H43l2-44h33zm.97 0l10 44h25l-2-44h-33z" />
        </g>
        <path fill="url(#a)" d="M324 207l-142-42v-63l142-37v142z" />
        <path fill="#78B309" d="M152 108h14v51h-14zm30-6l-14 6v51l14 6v-63z" />
        <rect fill="#78B309" x="5" y="88" width="145" height="91" rx="13.5" />
        <g clipPath="url(#b)" stroke="#78B309" strokeMiterlimit="10" fill="none">
            <circle cx="103" cy="49" r="33" strokeWidth="32" />
            <circle cx="42" cy="57" r="27" strokeWidth="30" />
        </g>
    </svg>
);

export default Logo;
