# Sustainable Project Hackathon

Static site for the Sustainable Project Hackathon at Tufts (Nov 14–15, Anderson 206), built with Astro. The look follows the pixel-art flyer in `flyers/flyer1.pdf`.

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `bun install`     | Install dependencies                     |
| `bun run dev`     | Start the dev server at `localhost:4321` |
| `bun run build`   | Build the static site to `./dist/`       |
| `bun run preview` | Preview the build locally                |

## Editing content

- Event details, schedule, prizes, makerspaces, FAQ, and the registration link: `src/data/event.ts`
- Pixel sprites (vines, sparkles, cursor): `src/data/pixels.ts`, one character per pixel
- Page layout and styles: `src/pages/index.astro`, `src/styles/global.css`
