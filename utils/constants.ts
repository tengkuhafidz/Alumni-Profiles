export enum Madrasah {
	IRSYAD = 'Madrasah Irsyad Zuhri Al-Islamiah',
	ALSAGOFF = 'Madrasah Alsagoff Al-Arabiah',
	ALJUNIED = 'Madrasah Aljunied Al-Islamiah',
	ARABIAH = 'Madrasah Al-Arabiah Al-Islamiah',
	AlMAARIF = 'Madrasah Al-Ma’arif Al-Islamiah',
	WAKTANJONG = 'Madrasah Wak Tanjong Al-Islamiah'
}

export interface Item {
	id: number
	name: string
	career: string
	fields: string[]
	madrasah: Madrasah
	graduationBatch: string
	education: string
	interests: string
	advice: string
	profileImage: string
	profileUrl: string
	isActive: boolean
}

export interface SiteData {
	// NAVBAR
	logoUrl: string
	navButtonText: string
	navButtonUrl: string
	navMenuText: string
	navMenuUrl: string
	//HERO
	heroTitle: string
	heroDescription: string
	//FOOTER
	copyrightText: string
	footerText: string
	footerLinkableText: string
	footerLinkableUrl: string
	//SEO
	seoTitle: string
	seoDescription: string
	seoBannerUrl: string
}

export const defaultSiteData: SiteData = {
	// NAVBAR
	logoUrl: 'https://www.ourmadrasah.sg/wp-content/uploads/2020/11/icon-1.png',
	navButtonText: 'Submit Your Profile',
	navButtonUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd_w-2m8xXIHH85ZRtqY5r9C7OPOqKEOmKs41V-sAFdt-seog/viewform?usp=sf_link',
	navMenuText: 'About Us',
	navMenuUrl: 'https://madrasahalumni.wordpress.com/blog',
	//HERO
	heroTitle: 'SG Madrasah Alumni - Career and Education',
	heroDescription:
		"\"What do Madrasah students become after they graduate? Do they have a future?\" Most of us who are/were from Madrasah may have heard such questions from others. We've thus created this compilation to encourage our juniors and foster collaboration - an initiative of Madrasah Alumni Collective Network, and supported by MUIS.",
	//FOOTER
	copyrightText: '© OurMadrasah 2021',
	footerText: 'This is an initiative is by',
	footerLinkableText: 'SG Madrasah Alumni',
	footerLinkableUrl: 'https://tengkuhafidz.com',
	//SEO
	seoTitle: 'SG Madrasah Alumni',
	seoDescription: 'List of Madrasah alumni profiles and their career paths',
	seoBannerUrl: '/images/banner.png',
}

export enum SheetsDimension {
	ROWS = 'ROWS',
	COLUMNS = 'COLUMNS',
}

export const SHEET_ID = process.env.SHEET_ID
export const SHEET_KEY = process.env.SHEET_KEY
