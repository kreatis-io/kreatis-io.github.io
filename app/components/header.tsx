import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Major_Mono_Display } from "next/font/google";

const major_mono_display = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });

function Header() {
    const [ref, inView] = useInView();

    return (
        <header>
            <nav className='bg-transparent px-[3vw] pt-8 mb-12'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                    className='flex flex-wrap justify-between items-center'
                >
                    <span className='self-center text-xl whitespace-nowrap dark:text-white'>
                        <Link href='/' className={major_mono_display.className + ' text-black dark:text-white'}>
                            KREATIS
                        </Link>
                    </span>
                    <div
                        className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
                        id='mobile-menu-2'
                    >
                        <ul className='flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0'>
                            <li>
                                <Link
                                    href='#contact'
                                    className={'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 font-bold hover:underline'}
                                >
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </nav>
        </header>
    );
}

export default Header;