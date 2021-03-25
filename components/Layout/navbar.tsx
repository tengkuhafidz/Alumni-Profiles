import {useContext} from 'react'
import {getColors} from '../../utils/getColors'
import SiteDataContext from '../../utils/SiteDataContext'

export default function Navbar() {
	const {
		navMenuText,
		navMenuUrl,
		navButtonText,
		navButtonUrl,
		themeColor,
		logoUrl,
	} = useContext(SiteDataContext)

	const {bgColor, hoverBgColor} = getColors(themeColor)

	return (
		<div className="flex">
			<div className="flex-grow">
				<img src={logoUrl} alt="logo" width={50} height={50} />
			</div>
			<div>
				<a
					href={navMenuUrl}
					className="text-gray-600 dark:text-gray-400 hover:underline"
					target="_blank"
				>
					{navMenuText}
				</a>
				<button
					className={`ml-4 md:ml-8 py-2 px-6 rounded-md text-white ${bgColor} ${hoverBgColor}`}
				>
					<a href={navButtonUrl} target="_blank">
						<span>{navButtonText}</span>
					</a>
				</button>
			</div>
		</div>
	)
}
