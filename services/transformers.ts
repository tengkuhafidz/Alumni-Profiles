import {defaultSiteData, Item, SiteData} from '../utils/constants'
import {stringToMadrasahDetails} from '../utils/madrasah'

const stringToBoolean = (field: string) => field === 'TRUE'
const stringToArray = (field: string) =>
	field?.split(',').map(field => field.trim())
export const toLowercase = (field: string) => field?.toLowerCase()

export const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		name: itemValue[0],
		career: itemValue[1],
		fields: stringToArray(itemValue[2]),
		madrasah: stringToMadrasahDetails(itemValue[3]),
		graduationBatch: itemValue[4],
		education: itemValue[5],
		interests: itemValue[6],
		advice: itemValue[7],
		profileImageUrl: itemValue[8],
		profilePageUrl: itemValue[9],
		isActive: stringToBoolean(itemValue[10]),
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
	footerText: siteDataValue[10],
	footerLinkableText: siteDataValue[11],
	footerLinkableUrl: siteDataValue[12],
	//SEO
	seoTitle: siteDataValue[13] || defaultSiteData.seoTitle,
	seoDescription: siteDataValue[14] || defaultSiteData.seoDescription,
	seoBannerUrl: siteDataValue[15] || defaultSiteData.seoBannerUrl,
})
