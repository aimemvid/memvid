// templates/parts/header.js

export function header(page) {
  return `
<header class="site-header">

  <a href="/">

    <img
      src="${page.logoimage}"
      alt="${page.site_name}"
      width="180"
      height="60">

  </a>

</header>
`;
}
