import React from 'react'

const Contact = () => {
  return (
	<div className='max-w-[1240px] m-auto p-4 h-screen'>
		<h1 className='text-2xl font-bold text-center p-4'>Lets work together</h1>
		<form action="" className='max-w-[600px] mx-auto space-y-2'>
			<div className='grid grid-cols-2 gap-2'>
				<input className='border shadow-lg p-3' type="text" placeholder='Name' />
				<input className='border shadow-lg p-3' type="text" placeholder='Email' />
			</div>
			<input className='border shadow-lg p-3 w-full' type="text"  placeholder='Subject' />
			<textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
			<button type='button' className='border shadow-lg p-3 w-full text-white bg-black hover:bg-black/70 '>Submit</button>
		</form>
	</div>
  )
}

export default Contact