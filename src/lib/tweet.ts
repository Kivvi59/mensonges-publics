/** Build a pre-filled X (Twitter) intent URL — free, no API key. */
export function tweetIntentUrl(text: string): string {
	const params = new URLSearchParams({ text });
	return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function tweetTextForMensonge(opts: {
	title: string;
	personality: string;
	quote?: string;
	sources?: { label: string; url: string }[];
}): string {
	const parts = [`Mensonge de ${opts.personality} : ${opts.title}`];

	if (opts.quote) {
		parts.push(`« ${opts.quote} »`);
	}

	const firstSource = opts.sources?.[0]?.url;
	if (firstSource) {
		parts.push(`Source : ${firstSource}`);
	}

	return parts.join('\n\n');
}
