/**
 * Blocking inline script that resolves the theme *before* first paint.
 *
 * Without this the page renders in the default theme for one frame and then
 * snaps to the other — the classic theme flash. It has to be inline and
 * synchronous in <head>; a React effect runs far too late. Light is the brand
 * default and is NOT overridden by the OS preference — the teal-on-white
 * identity is the design; dark is opt-in through the toggle only.
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem('mt-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
