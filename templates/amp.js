// s templates/amp.js

export function ampTemplate(page) {
  return `<!doctype html>
<html amp lang="id">

<head>

<meta charset="utf-8">

<title>${page.title}</title>

<meta name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1">

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

<script async
        src="https://cdn.ampproject.org/v0.js"></script>

<style amp-boilerplate>
body{
  -webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
  -moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
  -ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
  animation:-amp-start 8s steps(1,end) 0s 1 normal both
}
@keyframes -amp-start{
  from{visibility:hidden}
  to{visibility:visible}
}
</style>

<noscript>
<style amp-boilerplate>
body{
  animation:none
}
</style>
</noscript>

<style amp-custom>
body{
  font-family:Arial,sans-serif;
  max-width:1200px;
  margin:auto;
  padding:20px;
}
</style>

</head>

<body>

${page.content}

</body>

</html>`;
}
