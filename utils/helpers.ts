import Fuse from 'fuse.js'
import {Item} from './constants'

export const getFuseSearchResult = (
	items: Item[],
	searchTerm: string,
): Item[] => {
	const options = {
		isCaseSensitive: false,
		findAllMatches: false,
		includeMatches: false,
		includeScore: false,
		useExtendedSearch: false,
		minMatchCharLength: 1,
		shouldSort: true,
		threshold: 0.4,
		location: 0,
		distance: 100,
		keys: ['name', 'madrasah.name', 'fields', 'education', 'career'],
	}

	const fuse = new Fuse(items, options)
	const fuseSearchResult = fuse.search(searchTerm)
	return fuseSearchResult.map(result => result.item)
}

export const getDistinctFields = (items: Item[]) => {
	const distinctFields = []
	items.forEach(item => {
		if (item.fields) {
			item.fields.forEach(field => {
				!distinctFields.includes(field) && distinctFields.push(field)
			})
		}
	})

	return distinctFields.sort()
}
