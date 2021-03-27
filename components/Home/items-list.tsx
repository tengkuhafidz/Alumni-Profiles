import React from 'react'
import {Item} from '../../utils/constants'
import SingleItem from './single-item'

interface Props {
	items: Item[]
}

export default function ItemsList({items}: Props) {
	const renderItems = () => {
		return items.map(item => <SingleItem item={item} key={item.id} />)
	}

	return (
		<div className="py-4 mb-24 grid md:grid-cols-3 md:gap-x-8 gap-y-16 md:gap-y-16">
			{renderItems()}
		</div>
	)
}
