import {defaultSiteData, Item, Madrasah, SiteData} from '../utils/constants'

const stringToBoolean = (field: string) => field === 'TRUE'
const stringToArray = (field: string) => field?.split(',')
const toLowercase = (field: string) => field?.toLowerCase()

const stringToMadrasahEnum = (madrasah: string) => {
	const madrasahInLowerCase = toLowercase(madrasah)
	switch(madrasahInLowerCase) {
		case "irsyad":
			return Madrasah.IRSYAD
		case "alsagoff":
			return Madrasah.ALSAGOFF
		case "aljunied":
			return Madrasah.ALJUNIED
		case "arabiah":
			return Madrasah.ARABIAH
		case "al-maarif":
			return Madrasah.AlMAARIF
		case "wak tanjong":
			return Madrasah.WAKTANJONG
		default:
			return Madrasah.IRSYAD
	}
}

export const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		name: itemValue[0],
		career: itemValue[1],
		fields: stringToArray(itemValue[2]),
		madrasah: stringToMadrasahEnum(itemValue[3]),
		graduationBatch: itemValue[4],
		education: itemValue[5],
		interests: itemValue[6],
		advice: itemValue[7],
		profileImage: itemValue[8],
		profileUrl: itemValue[9],
		isActive: stringToBoolean(itemValue[20]),
	}))
}

export const transformSiteData = (siteDataValue: any[]): SiteData => ({
	// NAVBAR
	logoUrl: siteDataValue[1] || defaultSiteData.logoUrl,
	navButtonText: siteDataValue[2],
	navButtonUrl: siteDataValue[3],
	navMenuText: siteDataValue[4],
	navMenuUrl: siteDataValue[5],
	//HERO
	heroTitle: siteDataValue[7],
	heroDescription: siteDataValue[8],
	//FOOTER
	copyrightText: siteDataValue[12],
	footerText: siteDataValue[13],
	footerLinkableText: siteDataValue[14],
	footerLinkableUrl: siteDataValue[15],
	//SEO
	seoTitle: siteDataValue[17] || defaultSiteData.seoTitle,
	seoDescription: siteDataValue[18] || defaultSiteData.seoDescription,
	seoBannerUrl: siteDataValue[19] || defaultSiteData.seoBannerUrl,
})
