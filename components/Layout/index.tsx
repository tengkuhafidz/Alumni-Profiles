import Navbar from './navbar'
import Footer from './footer'
import SEO from './seo'

export default function Layout({children}) {
	return (
		<div className="text-gray-900 dark:bg-gray-800 dark:text-gray-100">
			<div className="container mx-auto max-w-5xl py-4 px-4">
				<SEO />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}
