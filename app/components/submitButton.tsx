"use client"

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

function SumbitButton() {

    const { pending } = useFormStatus()


    return (<button type="submit"
        aria-disabled={pending}
        className="
    py-3 px-5 text-sm font-medium text-center text-white bg-sky-500 
    dark:bg-sky-800 hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">Send</button>)
}

export default SumbitButton;