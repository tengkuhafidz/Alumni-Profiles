import {Dispatch, SetStateAction, useState} from 'react'
import {ALL, Item} from '../../../../utils/constants'
import {getDistinctFields} from '../../../../utils/helpers'
import {allMadrasahs} from '../../../../utils/madrasah'
import FilterOptions from './filter-options'

interface Props {
	items: Item[]
	selectedField: string
	setSelectedField: Dispatch<SetStateAction<string>>
	selectedMadrasah: string
	setSelectedMadrasah: Dispatch<SetStateAction<string>>
}

export default function FilterSection({
	items,
	selectedField,
	setSelectedField,
	selectedMadrasah,
	setSelectedMadrasah,
}: Props) {
	const [showFilterOptions, setShowFilterOptions] = useState(false)

	const distinctFields = getDistinctFields(items)

	const allMadrasahNames = allMadrasahs.map(madrasah => madrasah.name)

	const setSelectedMadrasahAndResetSelectedField = (madrasahName: string) => {
		setSelectedMadrasah(madrasahName)
		if (madrasahName !== ALL) {
			setSelectedField(ALL)
		}
	}

	const clearFilter = () => {
		setSelectedMadrasah(ALL)
		setSelectedField(ALL)
		setShowFilterOptions(false)
	}

	if (!showFilterOptions) {
		return (
			<p
				className="text-gray-500 text-sm mt-4 underline cursor-pointer"
				onClick={() => setShowFilterOptions(true)}
			>
				Advanced Filter
			</p>
		)
	}

	return (
		<div>
			<p
				className="text-gray-500 text-sm mt-2 underline cursor-pointer"
				onClick={clearFilter}
			>
				[Clear Filter]
			</p>
			<FilterOptions
				title="Graduated From"
				options={allMadrasahNames}
				selectedFilter={selectedMadrasah}
				setSelectedFilter={setSelectedMadrasahAndResetSelectedField}
			/>
			<FilterOptions
				title="Field"
				options={distinctFields}
				selectedFilter={selectedField}
				setSelectedFilter={setSelectedField}
			/>
		</div>
	)
}
