export default function Searchbar() {
	return (
		<div className="text-center max-w-xl mx-auto py-2 mb-16">
			<input
				type="text"
				className="shadow py-2 px-4 w-full rounded-full border border-gray-200 outline-none focus:shadow-lg"
				placeholder="Search"
			/>
			<p className="text-gray-500 text-sm mt-4 underline cursor-pointer">
				Advanced Filter
			</p>
		</div>
	)
}
