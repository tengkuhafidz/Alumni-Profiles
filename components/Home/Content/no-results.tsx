import {ALL} from '../../../utils/constants'

interface Props {
	searchTerm: string
	selectedMadrasahFilter: string
	selectedFieldFilter: string
}
export default function NoResults({
	searchTerm,
	selectedMadrasahFilter,
	selectedFieldFilter,
}: Props) {
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

	return (
		<div className="max-w-2xl bg-gray-100 px-2 mt-8 mb-12 py-6 rounded-xl mx-auto text-center">
			<p className="text-gray-500 font-semibold">
				No results found for {searchTermFilter}
				{madrasahFilterMessage}
				{fieldFilterMessage}.
			</p>
		</div>
	)
}
