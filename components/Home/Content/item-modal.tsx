import {Item} from '../../../utils/constants'
import Modal from 'react-modal'

interface Props {
	selectedItem: Item
	setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}
export default function ItemModal({selectedItem, setSelectedItem}: Props) {
	const {
		name,
		profileImageUrl,
		profilePageUrl,
		madrasah,
		career,
		education,
		fields,
		interests,
		advice,
	} = selectedItem
	return (
		<Modal
			isOpen={!!selectedItem}
			onRequestClose={() => setSelectedItem(null)}
			className="mx-auto bg-white rounded-xl max-w-xs mt-4 md:max-w-2xl md:mt-20 outline-none"
			style={{
				overlay: {
					backgroundColor: 'rgba(0, 0, 0, 0.75)',
				},
			}}
		>
			<div className="px-3 py-1 md:px-4 md:py-2 overflow-y-auto max-h-screen ">
				<div className="relative p-4 md:p-6">
					<div>
						<img
							className={`w-28 h-28 rounded-full cursor-pointer  shadow-lg transform hover:scale-125 hover:shadow-2xl border ${madrasah.borderColor}`}
							src={profileImageUrl}
							alt=""
							width="384"
							height="512"
						/>
					</div>
					<div className="py-2">
						<div>
							<h3 className="font-bold text-lg">{name}</h3>
							<p className="leading-6">{career}</p>
							<p
								className={`font-light font-light text-sm ${madrasah.textColor}`}
							>
								Graduated from {madrasah.name}
							</p>
						</div>

						<div className="mt-4">
							<h4 className="font-semibold text-gray-500 text-xs">
								Post Madrasah Education
							</h4>
							<p className="text-sm ">{education}</p>
						</div>

						<div className="mt-4 text-xs">
							<h4 className="font-semibold text-gray-500 text-xs">Industry</h4>
							<p className="text-sm ">{fields.join(', ')}</p>
						</div>

						<div className="mt-4">
							<h4 className="font-semibold text-gray-500 text-xs">Interests</h4>
							<p className="text-sm ">{interests}</p>
						</div>

						<div className="mt-4">
							<h4 className="font-semibold text-gray-500 text-xs">
								Advice for Juniors
							</h4>
							<p className="text-sm">{advice}</p>
						</div>
						<div className="mt-8 mb-4">
							<a
								href={profilePageUrl}
								target="_blank"
								className={`py-3 px-6 border border-b-4 rounded-xl hover:text-white ${madrasah.borderColor} ${madrasah.buttonBorderHoverColor} ${madrasah.textColor} ${madrasah.buttonBgHoverColor}`}
							>
								View Profile
							</a>
						</div>
					</div>
					<div className="absolute top-0 right-0">
						<button
							className="text-gray-600"
							onClick={() => setSelectedItem(null)}
						>
							x
						</button>
					</div>
				</div>
			</div>
		</Modal>
	)
}
