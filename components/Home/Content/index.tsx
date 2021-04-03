import React, {useState} from 'react'
import {ALL, Item} from '../../../utils/constants'
import {getFuseSearchResult} from '../../../utils/helpers'
import FilterSection from './FilterSection'
import ItemModal from './item-modal'
import ItemsList from './items-list'
import NoResults from './no-results'
import Searchbar from './searchbar'

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

	const renderItemsList = () => {
		if (filteredItems.length < 1) {
			return (
				<NoResults
					searchTerm={searchTerm}
					selectedMadrasahFilter={selectedMadrasahFilter}
					selectedFieldFilter={selectedFieldFilter}
				/>
			)
		}
		return <ItemsList items={filteredItems} setSelectedItem={setSelectedItem} />
	}

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
			<div className="text-center max-w-xl mx-auto py-2">
				<Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedFieldFilter={setSelectedFieldFilter}/>
				<FilterSection
					items={filteredItems}
					selectedField={selectedFieldFilter}
					setSelectedField={setSelectedFieldFilter}
					selectedMadrasah={selectedMadrasahFilter}
					setSelectedMadrasah={setSelectedMadrasahFilter}
				/>
			</div>
			{renderItemsList()}
			{renderModal()}
		</div>
	)
}
