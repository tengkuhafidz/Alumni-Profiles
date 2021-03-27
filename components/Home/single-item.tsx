import { useContext } from "react";
import { Item } from "../../utils/constants";
import { getColors } from "../../utils/getColors";
import SiteDataContext from "../../utils/SiteDataContext";

interface Props {
  item: Item
}

export default function SingleItem({item}: Props) {
  const { id, title, tags, imageUrl, destinationUrl } = item
  const {themeColor} = useContext(SiteDataContext)
	const {ringColor} = getColors(themeColor)

  const renderTags = tags => {
		return tags.map(tag => (
			<span
				className="font-light text-gray-500 dark:text-gray-400 mr-2"
				key={tag}
			>
				#{tag}
			</span>
		))
	}

  return (
    (
			<div key={id}>
				<a href={destinationUrl} target="_blank">
					<img
						src={imageUrl}
						className={`rounded-lg shadow-lg hover:shadow-xl cursor-pointer w-full hover:ring-4 ${ringColor} ring-opacity-50`}
					/>
				</a>
				<h3 className="font-semibold text-xl mt-4">{title}</h3>
				{renderTags(tags)}
			</div>
		)
  )
}