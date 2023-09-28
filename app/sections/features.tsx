import { motion } from "framer-motion";
import { Major_Mono_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Features() {
    const [ref1, inView] = useInView();
    const [ref2, inView2] = useInView();

    return <div
        className="bg-graph-paper dark:bg-graph-paper-dark !bg-local
        min-h-screen p-[7vw] pt-[4vw]"
    >
        <motion.p className={"mb-[3vw] text-black dark:text-gray-200"}
            ref={ref1}
            initial={{ opacity: 0, x: -100 }}
            animate={
                inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={
                {
                    duration: 0.5,
                }
            }
        >
            {"// Why Us"}
        </motion.p>
        <div className="
        
        flex flex-col gap-12 items-center
        
        ">
            <Feature title="Fast loading times"
                description={"We specialize in speeding up your website, which keeps your customers happy and engaged. This is what we do best, and it's essential for your business. A faster website awaits you. \n\nWe'll also provide ongoing support and maintenance so that your site stays fast over time. You won't have to worry about anything - just focus on running your business!"}
                image="/images/screenshots/pagespeed-insight-performance.png"
                link="https://pagespeed.web.dev/analysis/https-acutewoof-is-a-dev/d49rt5jc9s?form_factor=desktop"
            />
            <motion.hr ref={ref2}
                initial={{ opacity: 0, x: -100 }}
                animate={
                    inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={
                    {
                        duration: 0.5,
                    }
                }
                className="w-full 
                        border-1 border-slate-300 dark:border-slate-700
                        " />

            <Feature
                title="Increase discovery"
                description={"We take your business online, making it discoverable by millions. With the latest tools, your website will be modern and feature-rich. More online visibility means more business for you. \n\n We also make sure that your site is optimized for search engines, so you can get more traffic and customers. "}
                image="/images/screenshots/pagespeed-insight-seo.png"
                link="https://pagespeed.web.dev/analysis/https-acutewoof-is-a-dev/d49rt5jc9s?form_factor=desktop"
            />

            <motion.hr ref={ref2}
                initial={{ opacity: 0, x: -100 }}
                animate={
                    inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={
                    {
                        duration: 0.5,
                    }
                }
                className="w-full 
                        border-1 border-slate-300 dark:border-slate-700
                        " />

            <Feature
                title="Make your clients interact"
                description={"We make your website interactive, engaging your customers like never before. Using cutting-edge tools, we deliver the top-notch experience your clients expect. Keep your customers coming back for more.\n\n We also make sure that accessibility is a priority, so that everyone can use your website."}
                image="/images/screenshots/pagespeed-insight-accessibility.png"
                link="https://pagespeed.web.dev/analysis/https-acutewoof-is-a-dev/d49rt5jc9s?form_factor=desktop"
            />
        </div>
    </div>;
}

function Feature({
    title,
    description,
    image,
    link,
    linkName,
}: {
    title: string,
    description: string,
    image: string,
    link?: string,
    linkName?: string,
}) {

    const [ref, inView] = useInView();

    return (
        <motion.div className="max-w-screen-xl min-w-full flex 
                grid grid-cols-1 lg:grid-cols-2 gap-12
            ">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={
                    {
                        duration: 0.5,
                    }
                }
                className="flex flex-col gap-4">
                <h1 className={major_mono_display.className + " text-[5vw] lg:text-3xl font-bold text-black dark:text-white"}>
                    {title}
                </h1>
                <p className="text-[3vw] lg:text-lg text-black dark:text-white">
                    {description.split('\n').map((item, key) => {
                        return <React.Fragment key={key}>{item}<br /></React.Fragment>
                    })}
                    <br />
                    <br />
                    {link && linkName &&
                        <Link href={link} className="
                        underline hover:opacity-80
                        ">{linkName}</Link>
                    }
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={
                    {
                        duration: 0.5,
                    }
                }
            >
                <Image src={image} width={1920} height={1080} alt={linkName ? linkName : title}
                    onClick={
                        () => {
                            if (link) {
                                window.open(link, "_blank");
                            }
                        }
                    }
                    className={link ? "cursor-pointer" : ""}
                />
            </motion.div>
        </motion.div>
    )
}

export default Features;