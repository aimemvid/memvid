// s functions/sitemap.js

import { SITE, PAGES } from "../konten/pages.js";

export function sitemapPage() {

  const urls = Object.entries(PAGES)
    .map(([path]) => `
<url>
  <loc>${SITE.canonical.replace(/\/$/, "")}${path}</loc>
  <changefreq>daily</changefreq>
  <priority>${path === "/" ? "1.0" : "0.8"}</priority>
</url>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
      "cache-control": "public, max-age=86400"
    }
  });
}
