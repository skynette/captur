'use client'

import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react"


const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)

	const [color, setColor] = useState("transparent")
	const [textColor, setTextColor] = useState("white")

	const toggleMenu = () => {
		setShowMenu((prev) => !prev)
	}

	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 90) {
				setColor("white")
				setTextColor("black")
			} else {
				setColor("transparent")
				setTextColor("white")
			}
		}
		window.addEventListener("scroll", changeBackground)
		return () => {
			window.removeEventListener("scroll", changeBackground)
		}
	}, [])

	return (
		<div className="fixed left-0 top-0 w-full z-10 ease-in duration-300" style={{ backgroundColor: `${color}` }}>
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
				<Link href="/">
					<h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Captur</h1>
				</Link>
				<ul style={{color: `${textColor}`}} className="hidden sm:flex">
					<li className="p-4">
						<Link href="/home">Home</Link>
					</li>
					<li className="p-4">
						<Link href="/#gallery">Gallery</Link>
					</li>
					<li className="p-4">
						<Link href="/portfolio">Portfolio</Link>
					</li>
					<li className="p-4">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>

				{/* mobile button */}
				<div className="block sm:hidden z-10">
					{showMenu ? (
						<AiOutlineClose size={20} style={{color: `${textColor}`}} />
					) : (
						<AiOutlineMenu size={20} style={{color: `${textColor}`}} />
					)}
				</div>
				{/* mobile menu */}
				<div className={showMenu ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
					<ul>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/home">Home</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/#gallery">Gallery</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/portfolio">Portfolio</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>


			</div>
		</div>
	)
}

export default Navbar