interface Props {
	title: string
	description: string
}

export default function SubSection({title, description}: Props) {
	if (!description) {
		return null
	}

	return (
		<div className="mt-4">
			<h4 className="font-semibold text-gray-500 text-xs">{title}</h4>
			<p className="text-sm ">{description}</p>
		</div>
	)
}
