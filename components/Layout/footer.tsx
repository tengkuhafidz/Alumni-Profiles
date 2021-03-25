import Image from 'next/image'
import {useContext} from 'react'
import {getColors} from '../../utils/getColors'
import SiteDataContext from '../../utils/SiteDataContext'

export default function Footer() {
	const {
		copyrightText,
		footerText,
		footerLinkableText,
		footerLinkableUrl,
		themeColor,
	} = useContext(SiteDataContext)

	const {hoverTextColor} = getColors(themeColor)

	return (
		<div className="py-8 text-center text-gray-500 text-sm font-light">
			<Image src="/images/logo.png" width={50} height={50} />
			<p>{copyrightText}</p>
			<p>
				{footerText}{' '}
				<a
					href={footerLinkableUrl}
					target="_blank"
					className={`underline ${hoverTextColor}`}
				>
					{footerLinkableText}
				</a>
			</p>
		</div>
	)
}
