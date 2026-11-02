// Site-wide mouse cursor, built from the `cursor` sprite. Used by `html` in global.css.
import type { APIRoute } from 'astro';
import { cursor, parseSprite } from '../data/pixels';

/** CSS px per sprite pixel; 10×16 sprite → 20×32 cursor. */
const PX = 2;

export const GET: APIRoute = () => {
  const { width, height, rects } = parseSprite(cursor);
  const body = rects
    .map((r) => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="1" fill="${r.fill}"/>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width * PX}" height="${height * PX}" shape-rendering="crispEdges">${body}</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
