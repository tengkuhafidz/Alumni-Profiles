import {Item} from '../../../../utils/constants'
import Modal from 'react-modal'
import React from 'react'
import SubSection from './sub-section'

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
		graduationBatch,
	} = selectedItem

	const renderButton = () => {
		if (!profilePageUrl) {
			return null
		}
		return (
			<div className="mt-8 mb-4">
				<a
					href={profilePageUrl}
					target="_blank"
					className={`py-3 px-6 border border-b-4 rounded-xl hover:text-white ${madrasah.borderColor} ${madrasah.buttonBorderHoverColor} ${madrasah.textColor} ${madrasah.buttonBgHoverColor}`}
				>
					View Profile
				</a>
			</div>
		)
	}

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
							className={`w-28 h-28 object-cover rounded-full cursor-pointer  shadow-lg border ${madrasah.borderColor}`}
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
								{madrasah.name} ({graduationBatch})
							</p>
						</div>

						<SubSection
							title="Post Madrasah Education"
							description={education}
						/>
						<SubSection title="Industry" description={fields.join(', ')} />
						<SubSection
							title="Additional Roles / Interests"
							description={interests}
						/>
						<SubSection title="Advice for Juniors" description={advice} />
						{renderButton()}
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
