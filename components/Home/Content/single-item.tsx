import React from 'react'
import { Item } from '../../../utils/constants'
import Circles from './item-types/cirlces'

interface Props {
	item: Item
}

export default function SingleItem({item}: Props) {
	return <Circles item={item} />
}
