// s functions/robots.js

import { SITE } from "../konten/pages.js";

export function robotsPage() {
  return new Response(
`User-agent: *
Allow: /

Sitemap: ${SITE.canonical}sitemap.xml`,
    {
      headers: {
        "content-type": "text/plain; charset=UTF-8",
        "cache-control": "public, max-age=86400"
      }
    }
  );
}
