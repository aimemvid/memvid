// konten/pages.js

import { home } from "./pages/home.js";
import { tentangKami } from "./pages/tentang-kami.js";
import { kontak } from "./pages/kontak.js";

export const PAGES = {
  "/": home,
  "/tentang-kami": tentangKami,
  "/kontak": kontak
};
