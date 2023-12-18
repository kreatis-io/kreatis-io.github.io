import { Major_Mono_Display } from "next/font/google";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import SumbitButton from "../components/submitButton";
import { submit } from "../actions/submission";

import { experimental_useFormState as useFormState } from 'react-dom'
import { useEffect, useRef } from "react";

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Contact() {

    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const formRef = useRef<HTMLFormElement>(null);

    const [state, formAction] = useFormState(submit, {
        message: null,
    })

    useEffect(() => {
        if (!state) return;

        if (!state.message) return;

        if (state.message === "err") {
            alert("There was an error sending your message. Please try again later, or use the email address provided.")
            return;
        }
        else if (state.message) {
            formRef.current?.reset();
        }
    }, [state])

    return (
        <section className='bg-hero dark:bg-hero-dark' id="contact">

            <div className={" px-[3vw] py-[3vw] my-[2vw] flex flex-col gap-8"}>
                <div>
                    <motion.p className={"mb-[3vw] text-black dark:text-gray-200"}
                        ref={ref2}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            inView2 && { opacity: 1, x: 0 }
                        }
                        transition={
                            {
                                duration: 0.5,
                            }
                        }
                    >
                        {"// Get Started"}
                    </motion.p>
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
                    </motion.h1></div>
                <div
                    className="my-6 text-black dark:text-gray-200 ">
                    <div className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row gap-8 w-full py-8 lg:py-16 px-4 lg:px-16">
                        <div className="lg:w-[75%]">
                            <div>
                                <form ref={formRef} action={formAction} className="space-y-8">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 " placeholder="contact@kreatis.io" required />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                                        <input type="text" name="name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 " placeholder="John Doe" required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea name="message" id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Ask us anything, or provide a project description. We will get in contact with you to start working."></textarea>
                                    </div>
                                    <SumbitButton />
                                </form>
                            </div></div>
                        <div className="lg:pl-4 flex flex-col gap-8
                        lg:border-l border-gray-300 dark:border-gray-600
                        ">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4 items-center">
                                    <Link href="mailto:contact@kreatis.io" className="underline hover:opacity-80">
                                        contact@kreatis.io
                                    </Link>
                                </div>
                            </div>
                            <div>
                                Any message you send us will be responded to within 24 hours.
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Contact;