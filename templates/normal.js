// templates/normal.js

import { head } from "./parts/head.js";
import { header } from "./parts/header.js";
import { secheader } from "./parts/secheader.js";
import { secfooter } from "./parts/secfooter.js";
import { footer } from "./parts/footer.js";

export function normalTemplate(page) {
  return `
<!DOCTYPE html>
<html lang="id">

<head>
${head(page)}
</head>

<body>

${header(page)}

${secheader(page)}

${page.content}

${secfooter(page)}

${footer(page)}

</body>
</html>
`;
}
