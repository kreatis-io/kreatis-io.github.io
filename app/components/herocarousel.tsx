"use client"
//eslint-disable-next-line
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

function HeroCarousel() {
    return <>
        <ScrollCarousel
            smartSpeed
            autoplay
            autoplaySpeed={0.25}
        >{
                [
                    ["acutewoof.png", "https://acutewoof.is-a.dev"],
                    ["obsek.png", "https://acutewoof.is-a.dev/gallery"],
                    ["blog.png", "https://acutewoof.is-a.dev/blog"],
                    ["fit.png", "https://fitnesscourse.github.io"],
                    ["woof-os.png", "https://woof-os.github.io/"],
                ].map((image, index) => (
                    <Image key={index} src={`/images/screenshots/${image[0]}`} height={1920} width={1080} alt={image[0]}
                        onClick={
                            () => {
                                window.open(image[1], "_blank");
                            }
                        }
                        className="cursor-pointer w-[100vw] lg:w-[50vw]"
                    />
                ))
            }
        </ScrollCarousel>
    </>;
}

export default HeroCarousel;