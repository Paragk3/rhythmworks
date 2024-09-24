import Link from "next/link";
import React from "react";

function HeroSection(){
    return(
        <div
        className="h-auto md:h-[40rem] w-full rounded-md flex
        flex-col items-center justify-center relative overflow-hidden
        mx-auto py-10 md:py-0"
        >
            <div className="p-4 relative z-10 w-full text-center">
                <h1 
                 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
                 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Master the art of Music</h1>
                <p>Dive into our comprehensive music courses and transform
                    tour musical journey today. Whether you are beginner 
                    or looking to refine your skills, Join to unnlock your
                    true potential.
                </p>
                <div className="mt-4">
                 <Link href={"/courses"}>
                     Explore Courses
                 </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;