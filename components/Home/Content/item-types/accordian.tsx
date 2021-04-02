import {useState} from 'react'
import {Item} from '../../../../utils/constants'
import {MadrasahName} from '../../../../utils/madrasah'

interface Props {
	item: Item
}

export default function Circles({item}: Props) {
	const {id, name, career, profileImageUrl, madrasah} = item

	return (
		<div className="col-span-6">
			<div className="max-w-2xl mx-auto bg-gray-100 shadow p-4 text-left">
				<div className="flex">
					<img
						className={`w-24 h-24 rounded-full flex-narrow  cursor-pointer border-2 ${madrasah.borderColor} border-opacity-50 shadow-lg transform hover:scale-125 hover:shadow-2xl`}
						src={profileImageUrl}
						alt=""
						width="384"
						height="512"
					/>
					<div className="px-4 pt-6 tspace-y-4">
						<figcaption className="font-medium">
							<div className="text-cyan-600">{name}</div>
							<div className="text-gray-500 text-sm font-light">{career}</div>
						</figcaption>
					</div>
				</div>
			</div>
		</div>
	)
}
