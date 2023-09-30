import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Major_Mono_Display } from "next/font/google";
import Image from "next/image";

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Pricing() {

    const initial = { opacity: 0, x: -100 };
    const animate = { opacity: 1, x: 0 };
    const transition = { duration: 0.5 };

    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    const [ref5, inView5] = useInView();

    return (
        <div className="bg-graph-paper dark:bg-graph-paper-dark !bg-local p-[3vw] pt-[4vw]" id="pricing">
            <motion.div ref={ref}
                initial={initial}
                animate={inView ? animate : initial}
                transition={transition}
                className="my-6 text-black dark:text-gray-200">
                {"// Pricing"}
            </motion.div>

            <motion.div
                ref={ref2}
                initial={initial}
                animate={inView2 ? animate : initial}
                transition={transition}
                className={major_mono_display.className + ' mb-24 text-[7vw] lg:text-5xl font-bold text-black dark:text-white'}>
                Everyone deserves an online presence.
            </motion.div>


            <motion.div className="flex flex-col gap-12">
                <Plan
                    title="Basic"
                    description="Simple landing pages, portfolios, and blogs."
                    price="$250"
                    features={[
                        "Up to 5 pages, or a single page site",
                        "Responsive design",
                        "Hosting",
                        "Maintenance for a monthly fee",
                    ]}
                    link="https://acutewoof.is-a.dev"
                    image="/images/screenshots/acutewoof.png"
                />
                <motion.hr ref={ref4}
                    initial={initial}
                    animate={inView4 ? animate : initial}
                    transition={transition}
                    className="w-full 
                        border-1 border-slate-300 dark:border-slate-700
                        " />

                <Plan title="Standard"
                    description="Complex landing pages, portfolios, and blogs."
                    price="$450"
                    features={[
                        "Up to 10 pages",
                        "Responsive design",
                        "Parallax scrolling effects",
                        "3D animations",
                        "Contact form",
                        "Hosting",
                        "Maintenance for a monthly fee",
                    ]}
                    link="https://fitnesscourse.github.io"
                    image="/images/screenshots/fit.png"
                />
                <motion.hr ref={ref5}
                    initial={initial}
                    animate={inView5 ? animate : initial}
                    transition={transition}
                    className="w-full 
                        border-1 border-slate-300 dark:border-slate-700
                        " />
                <Plan title="Premium"
                    description="Web applications, e-commerce, and more."
                    price="$1000"
                    features={[
                        "Responsive design",
                        "React, Next.JS, and Tailwind CSS",
                        "Firebase serverless backend",
                        "Hosting",
                        "Maintenance for a monthly fee",
                    ]}
                    link="https://woof-music.web.app"
                    image="/images/screenshots/music.png"
                />
            </motion.div>
            <motion.div
                ref={ref3}
                initial={initial}
                animate={inView3 ? animate : initial}
                transition={transition}
                className="mt-12 text-black dark:text-gray-400 text-[3vw] lg:text-lg">
                <hr className="w-full border-1 border-slate-300 dark:border-slate-700" />
                Prices vary depending on the complexity of the site. Contact us for a quote. The prices above are minimums.
            </motion.div>

        </div>
    )
}

function Plan({ title, description, price, features, link, image }: {
    title: string,
    description: string,
    price: string,
    features: string[],
    link: string,
    image: string
}) {

    const [ref, inView] = useInView();

    const right = [
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0 }
    ]

    const left = [
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 }
    ]

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[3vw] lg:text-lg">
                <motion.div
                    ref={ref}
                    initial={left[0]}
                    animate={inView ? left[1] : left[0]}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6">
                    <h1 className={"text-4xl font-bold text-black dark:text-white " + major_mono_display.className}>{title}<br />{price}</h1>
                    <p className="text-black dark:text-white">{description}</p>
                    <ul className="text-black dark:text-white" >
                        {features.map((feature, index) => {
                            return <li key={index}>{feature}</li>
                        })}
                    </ul>

                </motion.div>

                <motion.div
                    initial={right[0]}
                    animate={inView ? right[1] : right[0]}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={image} width={1920} height={1080} alt={title} className="cursor-pointer" onClick={
                        () => {
                            window.open(link);
                        }
                    } />
                </motion.div>
            </div>
        </div>
    )
}

export default Pricing;