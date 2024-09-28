import Link from "next/link";


function UpcomingWebinars() {
    return(
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600
                    font-semibold tracking-wide uppercase">
                        FEATURED WEBINARS
                    </h2>
                    <p className="mt-2 text-3xl leading-8
                    font-extrabold tracking-tight text=white
                    sm:text-4xl">Emhance Your Musical journey</p>
                </div>
                <div className="mt-10">2</div>
                <div className="mt-10 text-center">
                    <Link href={"/"}
                    className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white 
                    dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                    >
                      View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars;