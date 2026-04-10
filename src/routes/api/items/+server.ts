import { json, error } from '@sveltejs/kit';
import { itemStore } from '$lib/store';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
  return json({ items: itemStore.list() });
};

export const POST: RequestHandler = async ({ request }) => {
  let body: { name?: unknown; description?: unknown };
  try {
    body = await request.json();
  } catch {
    error(400, 'Invalid JSON body');
  }

  if (
    typeof body?.name !== 'string' ||
    typeof body?.description !== 'string' ||
    body.name.length < 1 ||
    body.name.length > 100 ||
    body.description.length < 1 ||
    body.description.length > 500
  ) {
    error(400, 'name and description are required');
  }

  const item = itemStore.create(body.name, body.description);
  return json(item, { status: 201 });
};
