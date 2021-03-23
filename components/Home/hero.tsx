import {useContext} from 'react'
import SiteDataContext from '../../utils/SiteDataContext'

export default function Hero() {
	const {heroTitle, heroDescription} = useContext(SiteDataContext)
	return (
		<div className="py-12 md:py-20 mx-auto max-w-2xl text-center">
			<h1 className="text-5xl md:text-6xl font-bold">{heroTitle}</h1>
			<p className="py-6 font-light text-xl text-gray-600 dark:text-gray-400">
				{heroDescription}
			</p>
		</div>
	)
}
