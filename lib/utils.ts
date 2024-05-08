export function formatUrl(inputUrl: string): string {
	// Trim any whitespace from the URL
	let url = inputUrl.trim();
	// Check if the URL has a protocol. If not, prepend "http://"
	if (!url.match(/^[a-zA-Z]+:\/\//)) {
		url = 'https://' + url;
	}
	try {
		// Create a new URL object to normalize the URL
		const normalizedUrl = new URL(url);
		return normalizedUrl.toString();
	} catch (error) {
		// If the URL is invalid, log an error and return the original input
		console.error('Invalid URL:', inputUrl);
		return inputUrl;
	}
}