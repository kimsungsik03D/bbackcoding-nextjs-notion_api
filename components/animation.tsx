"use client";

import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "@/public/developer.json";

export default function animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: "100%", height: "100%" }}
    />
  );
}
