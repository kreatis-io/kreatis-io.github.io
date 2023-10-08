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
                        inView && { opacity: 1, x: 0 }
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
                    className="my-6 text-black dark:text-gray-200">
                    <form action="#" method="POST" className="">
                        <div className="lg:flex lg:gap-2">
                            <input type="text" name="name" id="name" placeholder="Name" className="form-input w-full p-2 my-2  dark:bg-slate-900 dark:text-gray-200
                            active:outline-none focus:outline-none
                            " />
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full from-input p-2 my-2 
                            dark:bg-slate-900 dark:text-gray-200
                            active:outline-none focus:outline-none
                            " />
                        </div>
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Message / Project Description (mention budget, type of project, and links to any related resources)." className="w-full form-textarea p-2 my-2 dark:bg-slate-900 dark:text-gray-200
                        active:outline-none focus:outline-none
                        "></textarea>
                    </form>
                </div>
            </div >
        </section >
    );
}

export default Contact;