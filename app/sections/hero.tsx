import Header from "../components/header";
import { Major_Mono_Display } from "next/font/google";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

import dynamic from "next/dynamic";

const HeroCarousel = dynamic(() => import("../components/herocarousel"), { ssr: false });

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Hero() {

    const [ref, inView] = useInView();

    return (
        <section className='bg-hero dark:bg-hero-dark'>
            <Header />
            <div className={" py-[3vw] my-[2vw] flex flex-col gap-8"}>
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={
                        {
                            duration: 1,
                        }
                    }
                    ref={ref}
                    className={major_mono_display.className + ' mx-[3vw] text-[10vw] lg:text-6xl max-w-screen-xl font-bold text-black dark:text-white'}>
                    Kreatis is an online web development agency.
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={
                        {
                            duration: 1,
                        }
                    }
                    className="mx-[3vw] my-6 text-black dark:text-gray-200">
                    {"// Previous Work"}
                    <HeroCarousel />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;