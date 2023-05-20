import Image from "next/image"

const Slider = ({ slides }) => {
	return (
		<div id="gallery">
			<h1>Gallery</h1>
			<div>
				{slides.map((slide, index) => {
					return (
						<Image key={index} src={slide.image} alt={slide.alt} width="1440" height="600" objectFit="cover"/>
					)
				})}
			</div>
		</div>
	)
}

export default Slider