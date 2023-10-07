"use client"

// import Contact from "./sections/contact";
import Features from "./sections/features";
import Hero from "./sections/hero";
import Pricing from "./sections/pricing";
import Why from "./sections/why";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen h-full bg-hero dark:bg-hero-dark">
      <Hero />
      <Why />
      <Features />
      <Pricing />
      <footer className='p-4 md:flex md:items-center md:justify-between md:p-6 '>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023 ACuteWoof. All Rights Reserved.
        </span>
      </footer>
    </main>
  )
}
