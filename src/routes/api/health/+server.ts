import { json } from '@sveltejs/kit';

const startTime = Date.now();

export const GET = (): Response => {
  return json({
    status: 'ok',
    appName: process.env.APP_NAME ?? 'Flui Demo SvelteKit',
    version: process.env.APP_VERSION ?? '1.0.0',
    uptime: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString(),
  });
};
