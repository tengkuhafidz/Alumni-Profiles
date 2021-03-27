import Image from 'next/image'
import { allMadrasahs } from '../../utils/madrasah'

export default function MadrasahStack() {
	const renderSingleMadrasah = () => {
		return allMadrasahs.map(madrasah => (
			<li className="inline-block" key={madrasah.name}>
				<Image
					src={madrasah.iconUrl}
					alt={madrasah.name}
					width={50}
					height={50}
				/>
			</li>
		))
	}

	return (
		<ul className="py-4 max-w-xl mx-auto space-x-4">{renderSingleMadrasah()}</ul>
	)
}
