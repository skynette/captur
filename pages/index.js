import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

export default function Home() {
	return (
	  <div>
		<Head>
		  <title>Photgraphy Portfolio</title>
		  <meta name="description" content="Generated by create next app" />
		  <link rel="icon" href="/favicon.ico" />
		</Head>
		<Hero heading="Captur Photography" message="I capture moments in nature and keep them alive"/>
		
	  </div>
	)
  }
