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

	return <div className="py-4 mb-24">{renderItems()}</div>
}
