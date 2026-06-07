// s functions/[[path]].js

import { ampPage } from "./amp.js";
import { pagesPage } from "./pages.js";
import { robotsPage } from "./robots.js";
import { sitemapPage } from "./sitemap.js";
import { rssPage } from "./rss.js";

export async function onRequest({ request }) {

  const { pathname } = new URL(request.url);

  if (pathname === "/amp") {
    return ampPage("/");
  }

  if (pathname === "/robots.txt") {
    return robotsPage();
  }

  if (pathname === "/sitemap.xml") {
    return sitemapPage();
  }

  if (pathname === "/rss.xml") {
    return rssPage();
  }

  return pagesPage(pathname);
}
