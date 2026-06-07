// konten/pages.js

import { home } from "./pages/home.js";
import { roboprgama } from "./pages/roboprgama.js";
import { tentangKami } from "./pages/tentang-kami.js";
import { kontak } from "./pages/kontak.js";

export const SITE = {
  title: home.title,
  desc: home.desc,
  afflink: home.afflink,
  site_name: home.site_name,
  canonical: home.canonical,
  logoimage: home.logoimage,
  image: home.image,
  favicon: home.favicon
};

export const PAGES = {
  "/": home,
  "/roboprgama": roboprgama,
  "/tentang-kami": tentangKami,
  "/kontak": kontak
};
