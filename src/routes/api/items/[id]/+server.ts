import { json, error } from '@sveltejs/kit';
import { itemStore } from '$lib/store';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params }) => {
  const item = itemStore.get(params.id);
  if (!item) error(404, 'Item not found');
  return json(item);
};

export const DELETE: RequestHandler = ({ params }) => {
  const deleted = itemStore.delete(params.id);
  if (!deleted) error(404, 'Item not found');
  return json({ deleted: true });
};
