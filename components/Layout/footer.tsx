import Image from 'next/image'
import {useContext} from 'react'
import SiteDataContext from '../../utils/SiteDataContext'

export default function Footer() {
	const {
		copyrightText,
		footerText,
		footerLinkableText,
		footerLinkableUrl,
	} = useContext(SiteDataContext)
	return (
		<div className="py-8 text-center text-gray-500 text-sm font-light">
			<Image src="/images/logo.png" width={50} height={50} />
			<p>{copyrightText}</p>
			<p>
				{footerText}{' '}
				<a
					href={footerLinkableUrl}
					target="_blank"
					className="underline hover:text-green-600"
				>
					{footerLinkableText}
				</a>
			</p>
		</div>
	)
}
