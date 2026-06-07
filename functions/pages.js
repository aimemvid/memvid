// functions/pages.js

import { PAGES } from "../konten/pages.js";
import { normalTemplate } from "../templates/normal.js";

export function pagesPage(pathname) {

  const page = PAGES[pathname];

  if (!page) {
    return new Response("404 - Not Found", {
      status: 404
    });
  }

  return new Response(
    normalTemplate(page),
    {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    }
  );
}
