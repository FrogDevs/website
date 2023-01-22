<script setup lang="ts">
import { useDark } from '@vueuse/core';
const isDark = useDark();
</script>
<template>
    <svg top="2.5rem sm:0rem" viewBox="0 0 360 706" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_30_1099)">
    <circle r="218.137" transform="matrix(0.00542364 0.999985 0.999985 -0.00542364 208.059 207.348)" fill="url(#paint0_linear_30_1099)"/>
    </g>
    <g filter="url(#filter1_f_30_1099)">
    <path d="M-68.4173 134.533L261.913 -53.8021L259.85 326.439L-68.4173 134.533Z" fill="url(#paint1_linear_30_1099)"/>
    </g>
    <path v-if="isDark" d="M647 0C647 106.087 597.798 207.828 510.219 282.843C422.639 357.857 303.856 400 180 400C56.1439 400 -62.6393 357.857 -150.219 282.843C-237.798 207.828 -287 106.087 -287 6.03983e-05L180 0H647Z" fill="#000807"/>
    <path v-else d="M647 0C647 106.087 597.798 207.828 510.219 282.843C422.639 357.857 303.856 400 180 400C56.1439 400 -62.6393 357.857 -150.219 282.843C-237.798 207.828 -287 106.087 -287 6.03983e-05L180 0H647Z" fill="#FFF7F8"/>
    <defs>
    <filter id="filter0_f_30_1099" x="-290.494" y="-291.205" width="997.105" height="997.105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="140.208" result="effect1_foregroundBlur_30_1099"/>
    </filter>
    <filter id="filter1_f_30_1099" x="-278.729" y="-264.113" width="750.953" height="800.864" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="105.156" result="effect1_foregroundBlur_30_1099"/>
    </filter>
    <linearGradient id="paint0_linear_30_1099" x1="45.0957" y1="30.0638" x2="349.579" y2="436.275" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00FF87"/>
    <stop offset="1" stop-color="#60EFFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_30_1099" x1="-68.4173" y1="134.533" x2="370.648" y2="136.914" gradientUnits="userSpaceOnUse">
    <stop stop-color="#60EFFF"/>
    <stop offset="1" stop-color="#00A3FF" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
</template>