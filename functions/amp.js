// functions/amp.js

import { PAGES } from "../konten/pages.js";
import { ampTemplate } from "../templates/amp.js";

export function ampPage(pathname = "/") {

  const page = PAGES[pathname];

  if (!page) {
    return new Response("404 - Not Found", {
      status: 404
    });
  }

  return new Response(
    ampTemplate(page),
    {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    }
  );
}
