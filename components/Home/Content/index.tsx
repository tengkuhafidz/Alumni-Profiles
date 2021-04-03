import React, {useState} from 'react'
import {ALL, Item} from '../../../utils/constants'
import {getFuseSearchResult} from '../../../utils/helpers'
import FilterSection from './FilterSection'
import ItemModal from './item-modal'
import ItemsList from './items-list'

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
		const searchTermFilter = !searchTerm ? (
			<span>profiles</span>
		) : (
			<span className="font-light underline">"{searchTerm}"</span>
		)

		const madrasahFilterMessage =
			selectedMadrasahFilter === ALL ? (
				<></>
			) : (
				<span>
					{' '}
					from{' '}
					<span className="font-light underline">{selectedMadrasahFilter}</span>
				</span>
			)

		const fieldFilterMessage =
			selectedFieldFilter === ALL ? (
				<></>
			) : (
				<span>
					{' '}
					whose in{' '}
					<span className="font-light underline">{selectedFieldFilter}</span>
				</span>
			)
		if (filteredItems.length < 1) {
			return (
				<div className="max-w-2xl bg-gray-100 px-2 mt-8 mb-12 py-6 rounded-xl mx-auto text-center">
					<p className="text-gray-500 font-semibold text-lg">
						No results found for {searchTermFilter}
						{madrasahFilterMessage}
						{fieldFilterMessage}.
					</p>
				</div>
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
				<div className="relative">
					<input
						type="text"
						className="shadow py-2 px-4 w-full text-gray-500 rounded-full border border-gray-200 outline-none focus:shadow-lg"
						placeholder="Search"
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
					<button
						className="absolute -ml-6 mt-2 text-gray-300 hover:text-gray-500"
						onClick={() => setSearchTerm('')}
					>
						x
					</button>
				</div>
				<FilterSection
					items={items}
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
