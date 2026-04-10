import { json } from '@sveltejs/kit';
import { openApiSpec } from '$lib/openapi';

export const GET = (): Response => {
  return json(openApiSpec);
};
