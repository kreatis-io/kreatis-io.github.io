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
        <div className="bg-graph-paper dark:bg-graph-paper-dark p-[3vw] pt-[4vw]">
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
                Unlock your business's potential.
            </motion.div>

            <div className="flex flex-col gap-12 lg:gap-0">
                <div
                    className="lg:flex flex-row-reverse"
                ><Reason
                        className="lg:pl-6 "
                        reverse
                        title="Credibility" description="A well-designed website adds legitimacy to your business, making customers more likely to trust you." />
                    <span className="hidden lg:block border-l-2 border-gray-500 dark:border-gray-400"></span>
                </div>
                <div className="lg:flex flex-row">
                    <Reason
                        className="lg:pr-6 lg:border-r-2 border-gray-500 dark:border-gray-400 lg:text-right"
                        title="Marketing" description="Utilise SEO and online advertising to attract more customers at a lower cost than traditional methods." />
                </div>
                <div className="lg:flex flex-row-reverse">
                    <Reason
                        className="lg:pl-6 "
                        reverse
                        title="Customer convenience" description="Stand out from competitors who don't have an online presence." />
                    <span className="hidden lg:block border-l-2 border-gray-500 dark:border-gray-400"></span>
                </div>
                <div className="lg:flex flex-row">
                    <Reason
                        className="lg:pr-6 lg:border-r-2 border-gray-500 dark:border-gray-400 lg:text-right"
                        title="Competitive advantage" description="Offer online services, bookings, or e-commerce options for customer ease." />
                </div>
                <div className="lg:flex flex-row-reverse">
                    <Reason
                        className="lg:pl-6"
                        reverse
                        title="Branding" description="A website is a canvas to showcase your brand's mission, values, and unique selling points." />
                    <span className="hidden lg:block border-l-2 border-gray-500 dark:border-gray-400"></span>
                </div>
            </div>

        </div>
    )
}

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
        <div className={"lg:w-1/2 lg:py-4 " + className} >
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