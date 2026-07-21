/* The Whi-Ski Inn — nav toggles + entrance animation */
(function () {
  // Entrance animation: enable only when the page is actually visible so the
  // animation clock is never frozen at frame 0 (which would pin content hidden).
  var root = document.documentElement;
  if (!document.hidden) {
    root.classList.add('anim-on');
  } else {
    document.addEventListener('visibilitychange', function onVis() {
      if (!document.hidden) {
        root.classList.add('anim-on');
        document.removeEventListener('visibilitychange', onVis);
      }
    });
  }

  function wireToggle(btnId, navId) {
    var btn = document.getElementById(btnId);
    var nav = document.getElementById(navId);
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      var caret = btn.querySelector('.caret');
      if (caret) caret.textContent = open ? '▴' : '▾';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    wireToggle('hamburger', 'mobileNav');
    wireToggle('footerToggle', 'footerNav');
  });
})();
