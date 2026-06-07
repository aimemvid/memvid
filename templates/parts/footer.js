// templates/parts/footer.js

export function footer(page) {
  return `
<footer class="site-footer">

  <p>
    &copy; ${new Date().getFullYear()} ${page.site_name}
  </p>

</footer>
`;
}
