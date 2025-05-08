// index.ts
import { serve } from 'bun'

//console.log('🚀 CV redirect server is running on http://localhost:3000')

serve({
	fetch(request) {
		return new Response(null, {
			status: 302,
			headers: {
				Location: 'https://cv-eki-studio.vercel.app/2025/intro.pdf'
			}
		})
	},
	port: 3000
})
