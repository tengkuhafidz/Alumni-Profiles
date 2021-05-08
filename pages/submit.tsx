export default () => null

export const getServerSideProps = async context => {
	return {
		redirect: {
			destination: `https://docs.google.com/forms/d/e/1FAIpQLSd_w-2m8xXIHH85ZRtqY5r9C7OPOqKEOmKs41V-sAFdt-seog/viewform`,
			permanent: false,
		},
	}
}
