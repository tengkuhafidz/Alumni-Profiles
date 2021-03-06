import {ALL} from '../../../utils/constants'

interface Props {
	searchTerm: string
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>
	setSelectedFieldFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function Searchbar({
	searchTerm,
	setSearchTerm,
	setSelectedFieldFilter,
}: Props) {
	const setSearchTermAndResetFieldFitler = (searchTerm: string) => {
		setSearchTerm(searchTerm)
		setSelectedFieldFilter(ALL)
	}

	return (
		<div className="relative">
			<input
				type="text"
				className="shadow py-2 px-4 w-full text-gray-500 rounded-full border border-gray-200 outline-none focus:shadow-lg"
				placeholder="Search"
				value={searchTerm}
				onChange={e => setSearchTermAndResetFieldFitler(e.target.value)}
			/>
			<button
				className="absolute -ml-6 mt-2 text-gray-300 hover:text-gray-500"
				onClick={() => setSearchTerm('')}
			>
				x
			</button>
		</div>
	)
}
