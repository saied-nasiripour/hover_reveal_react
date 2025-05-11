/* src/components/HoverRevealCard.jsx */
import React from 'react';
// Import the image from assets
import organicImage from '../assets/images/organic.png';

const HoverRevealCard = ({
                         imageSrc = organicImage,
                         title = 'ORGANIC',
                         subtitle = 'TANGERINE',
                         description = 'Organic pitaya blended with sprouted chia, bananas, and fresh fruit.',
                     }) => {
    return (
        <div
            className={
                `w-[500px] h-[300px] box-border absolute top-[53%] left-1/2 ` +
                `transform -translate-x-1/2 -translate-y-1/2 p-12 group ` +
                /* before pseudo-element initial state */
                `before:content-[''] before:absolute before:top-0 before:left-0 ` +
                `before:box-border before:border-solid before:border-[3px] before:border-transparent ` +
                `before:mt-[30px] before:mb-[-30px] before:w-0 before:h-0 ` +
                `before:transition-[width,height] before:duration-300 before:ease-out ` +
                `before:delay-[0ms,300ms] ` +
                /* after pseudo-element initial state */
                `after:content-[''] after:absolute after:bottom-0 after:right-0 ` +
                `after:box-border after:border-solid after:border-[3px] after:border-transparent ` +
                `after:mt-[30px] after:mb-[-30px] after:w-0 after:h-0 after:z-[999] ` +
                `after:transition-[width,height] after:duration-300 after:ease-out ` +
                `after:delay-[0ms,300ms] ` +
                /* hover animations for before */
                `hover:before:w-full hover:before:h-full ` +
                `hover:before:border-t-[#f25978] hover:before:border-r-[#f25978] `
            }
        >

            {/* Image */}
            <img src={imageSrc} alt={title} className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-[99]" />
            {/* Text reveal */}
            <div className="w-[120%] h-[200px] mt-5">
                <div className="font-knewave text-[36px] text-[#f25978] mb-[50px] relative top-0 left-0 transition-all duration-1000 group-hover:left-[45%]">
                    {title}
                    <span className="block text-lg text-[#f47a93]">
                        {subtitle}
                    </span>
                </div>
                <p className="relative w-[160px] font-raleway text-sm text-[#404040] left-0 bottom-8 leading-[1.8] transition-all duration-1000 group-hover:left-[45%]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HoverRevealCard;