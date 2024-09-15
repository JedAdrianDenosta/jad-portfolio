import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="802"
        height="904"
        viewBox="0 0 802 904"
        fill="none"
      >
        <g filter="url(#filter0_f_0_4699)">
          <circle cx="520" cy="384" r="120" fill="#6366F1" />
        </g>
        <defs>
          <filter
            id="filter0_f_0_4699"
            x="0"
            y="-136"
            width="1040"
            height="1040"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_0_4699"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default page;
