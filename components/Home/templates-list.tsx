export default function TemplatesList({items}) {
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

	const renderTemplates = () => {
		return items.map(({title, tags, imageUrl, destinationUrl}, index) => (
			<div key={index}>
				<a href={destinationUrl} target="_blank">
					<img
						src={imageUrl}
						className="rounded-lg shadow-lg hover:shadow-xl cursor-pointer w-full hover:ring-4 ring-green-500 ring-opacity-50"
					/>
				</a>
				<h3 className="font-semibold text-xl mt-4">{title}</h3>
				{renderTags(tags)}
			</div>
		))
	}

	return (
		<div className="py-4 mb-24 grid md:grid-cols-3 md:gap-x-8 gap-y-16 md:gap-y-16">
			{renderTemplates()}
		</div>
	)
}
