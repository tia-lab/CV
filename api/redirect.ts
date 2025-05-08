// api/redirect.ts
export const config = {
	runtime: 'edge'
}

export default async function handler() {
	return new Response(null, {
		status: 302,
		headers: {
			Location: 'https://cv-eki-studio/2025/intro.pdf'
		}
	})
}
