import { Major_Mono_Display } from "next/font/google";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Contact() {

    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();

    return (
        <section className='bg-hero dark:bg-hero-dark' id="contact">
            <div className={" px-[3vw] py-[3vw] my-[2vw] flex flex-col gap-8"}>
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
                    className={major_mono_display.className + ' text-[10vw] lg:text-6xl max-w-screen-xl font-bold text-black dark:text-white'}>
                    Contact us to get started.
                </motion.h1>
                <div
                    className="my-6 text-black dark:text-gray-200 flex flex-col lg:flex-row gap-4 lg:justify-between">
                    <motion.div initial={{ opacity: 0, x: -100 }}
                        animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={
                            {
                                duration: 1,
                            }
                        }
                        ref={ref2} className="flex flex-col grow gap-4 max-w-screen-sm">
                        <div className="flex justify-between">
                            <span>E-Mail</span>   <span>acutewoof@gmail.com</span>
                        </div>

                        <div className="flex justify-between">
                            Instagram
                            <Link
                                className="underline hover:opacity-80"
                                href="https://instagram.com/acutewoof">@acutewoof</Link>
                        </div>

                        <div className="flex justify-between">Discord (Direct)
                            <Link className="underline hover:opacity-80" href="https://discord.com/channels/@me/618114750827462660">@acutewoof</Link>
                        </div>
                        <div className="flex justify-between">Discord (Server)
                            <Link
                                className="underline hover:opacity-80"
                                href="https://discord.gg/sw32M4WhBn">sw32M4WhBn</Link>
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
}

export default Contact;