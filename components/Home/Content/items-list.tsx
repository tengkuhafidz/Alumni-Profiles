import React from 'react'
import {Item} from '../../../utils/constants'
import SingleItem from './single-item'

interface Props {
	items: Item[]
}

export default function ItemsList({items}: Props) {
	const renderItems = () => {
		return items.map(item => <SingleItem item={item} key={item.id} />)
	}

	return (
		<div className="py-2 mb-24 grid grid-cols-2 gap-x-4 md:grid-cols-4 md:gap-x-8 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 md:gap-y-16">
			{renderItems()}
		</div>
	)
}
