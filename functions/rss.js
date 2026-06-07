// s functions/rss.js

import { SITE, PAGES } from "../konten/pages.js";

export function rssPage() {

  const items = Object.entries(PAGES)
    .map(([path, page]) => `
<item>
  <title>${page.title}</title>
  <link>${SITE.canonical.replace(/\/$/, "")}${path}</link>
  <guid>${SITE.canonical.replace(/\/$/, "")}${path}</guid>
  <description><![CDATA[${page.desc}]]></description>
</item>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<rss version="2.0">

<channel>

<title>${SITE.site_name}</title>

<link>${SITE.canonical}</link>

<description>${PAGES["/"]?.desc || SITE.site_name}</description>

<language>id-ID</language>

${items}

</channel>

</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=UTF-8",
      "cache-control": "public, max-age=86400"
    }
  });
}
