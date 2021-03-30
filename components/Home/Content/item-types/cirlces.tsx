import {Item} from '../../../../utils/constants'

interface Props {
	item: Item
}

export default function Circles({item}: Props) {
	const {id, name, career, profileImageUrl, madrasah} = item

	return (
		<div>
			<img
				className={`w-32 h-32 rounded-full mx-auto cursor-pointer border-2 ${madrasah.borderColor} border-opacity-50 shadow-lg transform hover:scale-125 hover:shadow-2xl`}
				src={profileImageUrl}
				alt=""
				width="384"
				height="512"
			/>
			<div className="pt-6 text-center space-y-4">
				<figcaption className="font-medium">
					<div className="text-cyan-600">{name}</div>
					<div className="text-gray-500 text-sm font-light">{career}</div>
				</figcaption>
			</div>
		</div>
	)
}
