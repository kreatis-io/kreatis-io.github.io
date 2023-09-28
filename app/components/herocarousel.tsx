"use client"
//eslint-disable-next-line
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

function HeroCarousel() {
    return <>
        <ScrollCarousel
            smartSpeed
            margin={20}
            autoplay
            autoplaySpeed={0.25}
        >{
                [
                    ["acutewoof.png", "https://acutewoof.is-a.dev"],
                    ["art.png", "https://lorem-artist.vercel.app/"],
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
                        className="
                        cursor-pointer
                        "
                    />
                ))
            }
        </ScrollCarousel>
    </>;
}

export default HeroCarousel;