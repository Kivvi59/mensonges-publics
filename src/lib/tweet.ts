/** Build a pre-filled X (Twitter) intent URL — free, no API key. */
export function tweetIntentUrl(text: string, url?: string): string {
	const params = new URLSearchParams({ text });
	if (url) params.set('url', url);
	return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function tweetTextForMensonge(opts: {
	title: string;
	personality: string;
}): string {
	return `Mensonge de ${opts.personality} : ${opts.title}`;
}
