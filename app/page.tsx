"use client"

import Features from "./sections/features";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen h-full bg-hero dark:bg-hero-dark">
      <Hero />
      <Features />
    </main>
  )
}
