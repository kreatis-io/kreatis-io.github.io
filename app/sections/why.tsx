import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Major_Mono_Display } from "next/font/google";

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Why() {

    const initial = { opacity: 0, x: -100 };
    const animate = { opacity: 1, x: 0 };
    const transition = { duration: 0.5 };

    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();

    return (
        <div className="bg-graph-paper dark:bg-graph-paper-dark p-[3vw] pt-[4vw]" id="why">
            <motion.div ref={ref}
                initial={initial}
                animate={inView ? animate : initial}
                transition={transition}
                className="my-6 text-black dark:text-gray-200">
                {"// Why You Need A Website"}
            </motion.div>

            <motion.div
                ref={ref2}
                initial={initial}
                animate={inView2 ? animate : initial}
                transition={transition}
                className={major_mono_display.className + ' mb-12 text-[7vw] lg:text-5xl font-bold text-black dark:text-white'}>
                {"Unlock your business' potential."}
            </motion.div>

            <div className="flex flex-col gap-12 lg:gap-0">
                <div
                    className="lg:flex flex-row-reverse relative"
                ><Reason
                        className="lg:pl-6 "
                        reverse
                        title="Credibility" description="A well-designed website adds legitimacy to your business, making customers more likely to trust you."
                    />
                    <CircleOnALine />
                    <span className="hidden lg:block"></span>
                </div>
                <div className="lg:flex flex-row relative">
                    <Reason
                        className="lg:pr-6 lg:text-right"
                        title="Marketing" description="Utilise SEO and online advertising to attract more customers at a lower cost than traditional methods." />
                    <CircleOnALine />
                </div>
                <div className="lg:flex flex-row-reverse relative">
                    <Reason
                        className="lg:pl-6 "
                        reverse
                        title="Customer convenience" description="Stand out from competitors who don't have an online presence." />
                    <CircleOnALine />
                    <span className="hidden"></span>
                </div>
                <div className="lg:flex flex-row relative">
                    <Reason
                        className="lg:pr-6 lg:text-right"
                        title="Competitive advantage" description="Offer online services, bookings, or e-commerce options for customer ease." />
                    <CircleOnALine />
                </div>
                <div className="lg:flex flex-row-reverse relative">
                    <Reason
                        className="lg:pl-6"
                        reverse
                        title="Branding" description="A website is a canvas to showcase your brand's mission, values, and unique selling points." />
                    <CircleOnALine />
                    <span className="hidden lg:block"></span>
                </div>
            </div>

        </div>
    )
}


function CircleOnALine() {

    const [ref, inView] = useInView();

    return (
        <div className="hidden lg:block">
            <motion.div ref={ref}
                initial={{ opacity: 0, y: -100, x: "-50%" }}
                animate={inView ? { opacity: 1, y: "-50%", x: "-50%" } : { opacity: 0, y: -100, x: "-50%" }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-200 z-[100]">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="8" cy="8" r="8"></circle>
                </svg>
            </motion.div>
            <hr
                className="hidden lg:block border-l-2 w-[2px] h-full border-gray-500 dark:border-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></hr>
        </div>
    );
};



function Reason(
    {
        title, description, className, reverse
    }: {
        title: string,
        description: string,
        className?: string,
        reverse?: boolean
    }
) {

    const initial = { opacity: 0, x: reverse ? 100 : -100 };
    const animate = { opacity: 1, x: 0 };
    const transition = { duration: 1 };

    const [ref, inView] = useInView();

    return (
        <div className={"lg:w-1/2 lg:py-6 " + className} >
            <motion.div
                ref={ref}
                initial={initial}
                animate={inView ? animate : initial}
                transition={transition}
                className={"flex flex-col text-black dark:text-white "}>
                <div className={"text-[5vw] lg:text-3xl font-bold mb-4 " + major_mono_display.className}>{title.toLowerCase()}</div>
                <div className="text-[3vw] lg:text-lg">{description}</div>
            </motion.div>
        </div>
    )

}

export default Why;