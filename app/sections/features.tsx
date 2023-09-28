import { motion } from "framer-motion";
import { Major_Mono_Display } from "next/font/google";
import Image from "next/image";
import Button from "../components/button";
import Link from "next/link";

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Features() {
    return <>
        <div className="
        bg-graph-paper dark:bg-graph-paper-dark
        min-h-screen
        flex flex-col gap-8 items-center
        p-[7vw]
        ">
            <motion.div className="max-w-screen-xl min-w-full flex 
                grid grid-cols-1 lg:grid-cols-2 gap-12
            ">
                <motion.div className="flex flex-col gap-4">
                    <h1 className={major_mono_display.className + " text-[5vw] lg:text-3xl font-bold text-black dark:text-white"}>
                        Fast loading times
                    </h1>
                    <p className="text-[3vw] lg:text-lg text-black dark:text-white">
                        We specialize in speeding up your website, which keeps your customers happy and engaged. This is what we do best, and it's essential for your business. A faster website awaits you.
                        <br />
                        <br />
                        We'll also provide ongoing support and maintenance so that your site stays fast over time. You won't have to worry about anything - just focus on running your business!
                        <br />
                        <br />
                        <Link href="https://pagespeed.web.dev/analysis/https-acutewoof-is-a-dev/d49rt5jc9s?form_factor=desktop" className="
                        underline hover:opacity-80
                        ">Example PageSpeed Insight</Link>
                    </p>
                </motion.div>
                <motion.div>
                    <Image src="/images/screenshots/pagespeed-insight-performance.png" width={1920} height={1080} alt="Google PageSpeed Insights" />
                </motion.div>
            </motion.div>
        </div>
    </>;
}

export default Features;