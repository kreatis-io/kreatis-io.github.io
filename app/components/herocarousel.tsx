"use client"

import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

function HeroCarousel() {
    return <>
        <ScrollCarousel
            smartSpeed
            margin={20}
        >{
                [
                    "acutewoof.png",
                    "art.png",
                    "blog.png",
                    "fit.png",
                    "woof-os.png"
                ].map((image) => (
                    <Image src={`/images/screenshots/${image}`} height={1920} width={1080} alt={image} />
                ))
            }
        </ScrollCarousel>
    </>;
}

export default HeroCarousel;