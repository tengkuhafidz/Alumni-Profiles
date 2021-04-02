import React, {useState} from 'react'
import {ALL, Item} from '../../../utils/constants'
import {getFuseSearchResult} from '../../../utils/helpers'
import FilterSection from './FilterSection'
import ItemsList from './items-list'
import Modal from 'react-modal'
import ItemModal from './item-modal'

interface Props {
	items: Item[]
}

export default function Content({items}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedMadrasahFilter, setSelectedMadrasahFilter] = useState(ALL)
	const [selectedFieldFilter, setSelectedFieldFilter] = useState(ALL)
	const [selectedItem, setSelectedItem] = useState(null)

	const searchResults = searchTerm
		? getFuseSearchResult(items, searchTerm)
		: items

	const filteredItems = searchResults.filter(
		item =>
			(selectedMadrasahFilter === ALL ||
				item.madrasah.name === selectedMadrasahFilter) &&
			(selectedFieldFilter === ALL ||
				item.fields.includes(selectedFieldFilter)),
	)

	const renderModal = () => {
		if (!selectedItem) {
			return null
		}

		return (
			<ItemModal
				selectedItem={selectedItem}
				setSelectedItem={setSelectedItem}
			/>
		)
	}

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
					selectedField={selectedFieldFilter}
					setSelectedField={setSelectedFieldFilter}
					selectedMadrasah={selectedMadrasahFilter}
					setSelectedMadrasah={setSelectedMadrasahFilter}
				/>
			</div>
			<ItemsList items={filteredItems} setSelectedItem={setSelectedItem} />
			{renderModal()}
		</div>
	)
}
