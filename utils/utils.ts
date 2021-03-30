export const debounce = (func, wait) => {
	let timeout

	console.log('wait', wait)

	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout)
			console.log('timeout', timeout)

			func(...args)
			console.log('executed')
		}

		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
	}
}
