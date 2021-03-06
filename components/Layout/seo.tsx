import Head from 'next/head'
import {useContext} from 'react'
import SiteDataContext from '../../utils/SiteDataContext'

export default function SEO() {
	const {seoTitle, seoDescription, seoBannerUrl} = useContext(SiteDataContext)
	const fullSeoTitle = `${seoTitle} | Powered by Websheets`
	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />
			{/* HTML Meta Tags */}
			<title>{fullSeoTitle}</title>
			<meta name="description" content={seoDescription} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content="https://madrasahalumni.websheets.co/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullSeoTitle} />
			<meta property="og:description" content={seoDescription} />
			<meta property="og:image" content={seoBannerUrl} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="madrasahalumni.websheets.co" />
			<meta
				property="twitter:url"
				content="https://madrasahalumni.websheets.co/"
			/>
			<meta name="twitter:title" content={fullSeoTitle} />
			<meta name="twitter:description" content={seoDescription} />
			<meta name="twitter:image" content={seoBannerUrl} />
		</Head>
	)
}
