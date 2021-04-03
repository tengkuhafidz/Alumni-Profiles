import {toLowercase} from '../services/transformers'

export enum MadrasahName {
	IRSYAD = 'Madrasah Irsyad Zuhri',
	ARABIAH = 'Madrasah Al-Arabiah',
	ALJUNIED = 'Madrasah Aljunied',
	WAKTANJONG = 'Madrasah Wak Tanjong',
	AlMAARIF = 'Madrasah Al-Ma’arif',
	ALSAGOFF = 'Madrasah Alsagoff',
}

export interface Madrasah {
	name: MadrasahName
	iconUrl: string
	borderColor: string
	buttonBorderHoverColor: string
	buttonBgHoverColor: string
	textColor: string
}

const IRSYAD_DETAILS: Madrasah = {
	name: MadrasahName.IRSYAD,
	iconUrl: '/images/madrasah-logo/irsyad-logo.png',
	borderColor: 'border-green-600',
	buttonBorderHoverColor: 'hover:border-green-800',
	buttonBgHoverColor: 'hover:bg-green-600',
	textColor: 'text-green-600',
}

const ARABIAH_DETAILS: Madrasah = {
	name: MadrasahName.ARABIAH,
	iconUrl: '/images/madrasah-logo/arabiah-logo.png',
	borderColor: 'border-green-400',
	buttonBorderHoverColor: 'hover:border-green-600',
	buttonBgHoverColor: 'hover:bg-green-400',
	textColor: 'text-green-400',
}

const ALJUNIED_DETAILS: Madrasah = {
	name: MadrasahName.ALJUNIED,
	iconUrl: '/images/madrasah-logo/aljunied-logo.png',
	borderColor: 'border-blue-600',
	buttonBorderHoverColor: 'hover:border-blue-800',
	buttonBgHoverColor: 'hover:bg-blue-600',
	textColor: 'text-blue-600',
}

const WAKTANJONG_DETAILS: Madrasah = {
	name: MadrasahName.WAKTANJONG,
	iconUrl: '/images/madrasah-logo/waktanjong-logo.png',
	borderColor: 'border-purple-800',
	buttonBorderHoverColor: 'hover:border-purple-900',
	buttonBgHoverColor: 'hover:bg-purple-800',
	textColor: 'text-purple-800',
}

const ALMAARIF_DETAILS: Madrasah = {
	name: MadrasahName.AlMAARIF,
	iconUrl: '/images/madrasah-logo/almaarif-logo.png',
	borderColor: 'border-pink-600',
	buttonBorderHoverColor: 'hover:border-pink-800',
	buttonBgHoverColor: 'hover:bg-pink-600',
	textColor: 'text-pink-600',
}

const ALSAGOFF_DETAILS: Madrasah = {
	name: MadrasahName.ALSAGOFF,
	iconUrl: '/images/madrasah-logo/alsagoff-logo.png',
	borderColor: 'border-yellow-500',
	buttonBorderHoverColor: 'hover:border-yellow-700',
	buttonBgHoverColor: 'hover:bg-yellow-500',
	textColor: 'text-yellow-500',
}

export const stringToMadrasahDetails = (madrasah: string): Madrasah => {
	const madrasahInLowerCase = toLowercase(madrasah)
	switch (madrasahInLowerCase) {
		case 'irsyad':
			return IRSYAD_DETAILS
		case 'arabiah':
			return ARABIAH_DETAILS
		case 'aljunied':
			return ALJUNIED_DETAILS
		case 'wak tanjong':
			return WAKTANJONG_DETAILS
		case 'al-maarif':
			return ALMAARIF_DETAILS
		case 'alsagoff':
			return ALSAGOFF_DETAILS
		default:
			return IRSYAD_DETAILS
	}
}

export const allMadrasahs: Madrasah[] = [
	IRSYAD_DETAILS,
	ARABIAH_DETAILS,
	ALJUNIED_DETAILS,
	WAKTANJONG_DETAILS,
	ALMAARIF_DETAILS,
	ALSAGOFF_DETAILS,
]
