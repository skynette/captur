import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
	<div className='max-w-[1240px] mx-auto py-16 text-center'>
		<h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
		<div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
			<div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
				<Image 
					src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
					layout='responsive'
					alt='/'
					width="677"
					height="451"
				/>
			</div>
			<div className='w-full h-full'>
				<Image 
					src="https://images.unsplash.com/photo-1541515929569-1771522cbaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					layout='responsive'
					alt='/'
					width="215"
					height="217"
					objectFit='cover'
				/>

			</div>
			<div className='w-full h-full'>
				<Image 
					src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
					layout='responsive'
					alt='/'
					width="215"
					height="217"
					objectFit='cover'
				/>

			</div>
			<div className='w-full h-full'>
				<Image 
					src="https://images.unsplash.com/photo-1541515929569-1771522cbaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					layout='responsive'
					alt='/'
					width="215"
					height="217"
					objectFit='cover'
				/>

			</div>
			<div className='w-full h-full'>
				<Image 
					src="https://images.unsplash.com/photo-1580892047528-7dfd384dce65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
					layout='responsive'
					alt='/'
					width="215"
					height="217"
					objectFit='cover'
				/>

			</div>
		</div>
	</div>
  )
}

export default Portfolio