import React, { useState } from 'react'
import { ALL, Item } from '../../../utils/constants'
import { getFuseSearchResult } from '../../../utils/helpers'
import FilterSection from './FilterSection'
import ItemsList from './items-list'

interface Props {
	items: Item[]
}

export default function Content({items}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedMadrasah, setSelectedMadrasah] = useState(ALL)
	const [selectedField, setSelectedField] = useState(ALL)

	const searchResults = searchTerm
		? getFuseSearchResult(items, searchTerm)
		: items

	const filteredItems = searchResults.filter(
		item =>
			(selectedMadrasah === ALL || item.madrasah.name === selectedMadrasah) &&
			(selectedField === ALL || item.fields.includes(selectedField)),
	)

	return (
		<div>
			<div className="text-center max-w-xl mx-auto py-2 mb-16">
				<input
					type="text"
					className="shadow py-2 px-4 w-full  text-gray-500 rounded-full border border-gray-200 outline-none focus:shadow-lg"
					placeholder="Search"
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<FilterSection
					items={items}
					selectedField={selectedField}
					setSelectedField={setSelectedField}
					selectedMadrasah={selectedMadrasah}
					setSelectedMadrasah={setSelectedMadrasah}
				/>
			</div>
			<ItemsList items={filteredItems} />
		</div>
	)
}
