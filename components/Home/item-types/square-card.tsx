import {Item} from '../../../utils/constants'

interface Props {
	item: Item
}

export default function SquareCard({item}: Props) {
	const {id, name, career, profileImageUrl} = item

	return (
		<figure className="bg-gray-100 rounded-xl p-8 shadow hover:shadow-lg">
			<img
				className="w-32 h-32 rounded-full mx-auto"
				src={profileImageUrl}
				alt=""
				width="384"
				height="512"
			/>
			<div className="pt-6 space-y-4">
				<figcaption className="font-medium">
					<div className="text-cyan-600">{name}</div>
					<div className="text-gray-500 text-sm font-light">{career}</div>
				</figcaption>
			</div>
		</figure>
	)
}
