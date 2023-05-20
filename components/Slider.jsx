'use client'
import Image from "next/image"
import { useState } from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<div id="gallery" className="max-w-[1240px] mx-auto">
			<h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
			<div className="relative flex justify-center p-4">
				{slides.map((slide, index) => {
					return (
						<div className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'} key={index}>
							<FaArrowAltCircleLeft className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]" size={50} onClick={nextSlide} />
							{index === current && (
								<Image src={slide.image} alt={slide.alt} width="1440" height="600" objectFit="cover" />
							)}
							<FaArrowAltCircleRight className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]" size={50} onClick={prevSlide} />
						</div>
					)
				})}

			</div>
		</div>
	)
}

export default Slider