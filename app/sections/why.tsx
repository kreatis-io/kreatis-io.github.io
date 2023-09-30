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
                className={major_mono_display.className + ' mb-24 text-[7vw] lg:text-5xl font-bold text-black dark:text-white'}>
                Unlock your business's potential.
            </motion.div>

        </div>
    )
}

export default Why;