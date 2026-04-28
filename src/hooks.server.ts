import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('old', 'new'),
		filterSerializedResponseHeaders: (name) => name.startsWith('x-'),
		preload: ({ type, path }) =>
			type === 'js' ||
			type == 'font' ||
			type === 'css' ||
			type === 'asset' ||
			path.includes('/important/')
	});

	return response;
};
