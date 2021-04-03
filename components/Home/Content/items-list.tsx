import React from 'react'
import {Item} from '../../../utils/constants'
import Circles from './item-types/cirlces'

interface Props {
	items: Item[]
	setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}

export default function ItemsList({items, setSelectedItem}: Props) {
	const renderItems = () => {
		return items.map(item => (
			<Circles item={item} key={item.id} setSelectedItem={setSelectedItem} />
		))
	}

	return (
		<div className="py-16 mb-8 grid grid-cols-2 gap-x-4 md:grid-cols-4 md:gap-x-8 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 md:gap-y-10 ">
			{renderItems()}
		</div>
	)
}
