import Image from 'next/image'
import {allMadrasahs} from '../../../utils/madrasah'

export default function MadrasahStack() {
	const renderSingleMadrasah = () => {
		return allMadrasahs.map(madrasah => (
			<li
				className={`inline-block px-1 bg-gray-100 shadow pt-1 border border-opacity-50 rounded-full ${madrasah.borderColor}`}
				key={madrasah.name}
			>
				<Image
					src={madrasah.iconUrl}
					alt={madrasah.name}
					width={40}
					height={40}
				/>
			</li>
		))
	}

	return (
		<ul className="max-w-xl mx-auto space-x-4">{renderSingleMadrasah()}</ul>
	)
}
