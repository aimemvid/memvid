// templates/parts/footer.js

export function footer(home) {
  return `
<footer class="site-footer">

  <p>
    &copy; ${new Date().getFullYear()} ${home.site_name}
  </p>

</footer>
`;
}
