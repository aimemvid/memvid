// functions/home.js

import { PAGES } from "../konten/pages.js";
import { normalTemplate } from "../templates/normal.js";

export function homePage() {

  const page = PAGES["/"];

  return new Response(
    normalTemplate(page),
    {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    }
  );
}
