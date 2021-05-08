import {Item} from '../../../../utils/constants'

interface Props {
	item: Item
	setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}

export default function Circles({item, setSelectedItem}: Props) {
	const {name, career, profileImageUrl, madrasah} = item
	return (
		<div>
			<img
				className={`w-32 h-32 object-cover rounded-full mx-auto cursor-pointer border-2 hover:m-4 ${madrasah.borderColor} border-opacity-50 shadow-lg transform hover:scale-125 hover:shadow-2xl`}
				src={profileImageUrl}
				alt=""
				width="384"
				height="512"
				onClick={() => setSelectedItem(item)}
				loading="lazy"
			/>
			<div className="mt-4 text-center space-y-4">
				<figcaption className="font-medium">
					<div className="text-cyan-600">{name}</div>
					<div className="text-gray-500 text-sm font-light">{career}</div>
				</figcaption>
			</div>
		</div>
	)
}
