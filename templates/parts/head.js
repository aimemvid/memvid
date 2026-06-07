// templates/parts/head.js

export function head(page) {
  return `
<meta charset="UTF-8">

<title>${page.title}</title>

<meta name="description"
      content="${page.desc}">

<link rel="canonical"
      href="${page.canonical}">

<link rel="icon"
      href="${page.favicon}">

<meta property="og:title"
      content="${page.title}">

<meta property="og:description"
      content="${page.desc}">

<meta property="og:image"
      content="${page.image}">

<meta property="og:url"
      content="${page.canonical}">

<meta property="og:type"
      content="website">
`;
}
