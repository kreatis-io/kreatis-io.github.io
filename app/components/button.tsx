function Button(
    {
        children,
        onClick,
        icon
    }: {
        children?: React.ReactNode,
        onClick?: () => void,
        icon?: React.ReactNode
    }
) {
    return (
        <>
            <button
                className='text-sm items-center pl-[16px] pr-[24px] py-[10px] leading-6 text-sm rounded-[100px] text-white bg-slate-800 dark:bg-slate-300 dark:text-slate-800 dark:hover:bg-slate-400 hover:bg-slate-600 transition ease-in-out duration-150 cursor-pointer flex flex-row items-center line-height-[0] button-shadow'
                onClick={onClick}
            >
                <span className='mr-[8px] flex flex-col justify-center'>{icon}</span>
                {children}
            </button>
        </>
    );
}

export default Button;