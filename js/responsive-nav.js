/* ═══════════════════════════════════════════════════════════════
   KYAMBOGO NOTIFY — responsive-nav.js
   DROP-IN file. No HTML changes needed.
   Add ONE line to every page's <head> or just before </body>,
   AFTER app.js:
       <script src="js/responsive-nav.js"></script>
   ═══════════════════════════════════════════════════════════════ */

(function () {

  /* ── Nav links for the drawer ── */
  var NAV_LINKS = [
    { href: 'discover.html',    label: 'Discover' },
    { href: 'home.html',        label: 'Home' },
    { href: 'notices.html',     label: 'Notices' },
    { href: 'campus-news.html', label: 'Campus News' }
  ];

  /* Detect current page */
  var currentPage = window.location.pathname.split('/').pop() || 'discover.html';

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     HAMBURGER + DRAWER INJECTION
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  function buildMobileNav() {
    var nav = document.querySelector('nav.fixed, header.fixed');
    if (!nav) return;

    /* Don't inject twice */
    if (nav.querySelector('.kyu-hamburger')) return;

    /* ── Hamburger button ── */
    var btn = document.createElement('button');
    btn.className = 'kyu-hamburger';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:22px;pointer-events:none;display:inline-block;vertical-align:middle;">menu</span>';

    /* Append hamburger to the nav's inner flex row */
    var row = nav.querySelector('[class*="max-w"]');
    if (row) row.appendChild(btn);

    /* ── Overlay ── */
    var overlay = document.createElement('div');
    overlay.className = 'kyu-mobile-overlay';
    document.body.appendChild(overlay);

    /* ── Drawer ── */
    var session = (typeof getSession === 'function') ? getSession() : null;

    var linksHTML = NAV_LINKS.map(function (l) {
      var active = currentPage === l.href ? 'kyu-active' : '';
      return '<a href="' + l.href + '" class="kyu-drawer-link ' + active + '">' + l.label + '</a>';
    }).join('');

    var authHTML = session
      ? '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">' +
          '<img src="' + session.avatar + '" style="width:36px;height:36px;border-radius:50%;border:2px solid #725c00;flex-shrink:0;">' +
          '<div><p style="margin:0;font-weight:700;font-size:13px;color:#1a1c1c;">' + session.name + '</p>' +
          '<p style="margin:0;font-size:11px;color:#5f5e5e;">' + session.email + '</p></div></div>' +
          '<button class="kyu-drawer-auth-btn" onclick="window.location.href=\'visitor-portal.html\'">My Workspace</button>' +
          '<button onclick="clearSession();updateNavAuth();showToast(\'Signed out.\',\'info\');closeDrawer();" style="display:block;width:100%;padding:0.65rem 1rem;margin-top:8px;background:none;border:1px solid #ba1a1a;border-radius:100px;color:#ba1a1a;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;">Sign Out</button>'
      : '<button class="kyu-drawer-auth-btn" onclick="closeDrawer();if(typeof showAuthModal===\'function\')showAuthModal();">Sign in with Google →</button>';

    var drawer = document.createElement('div');
    drawer.className = 'kyu-mobile-drawer';
    drawer.innerHTML =
      '<div class="kyu-drawer-head">' +
        '<span class="kyu-drawer-brand">Kyambogo Notify</span>' +
        '<button class="kyu-drawer-close" onclick="closeDrawer()" aria-label="Close menu">' +
          '<span class="material-symbols-outlined" style="font-size:24px;display:inline-block;vertical-align:middle;color:#5f5e5e;">close</span>' +
        '</button>' +
      '</div>' +
      linksHTML +
      '<div class="kyu-drawer-auth">' + authHTML + '</div>';
    document.body.appendChild(drawer);

    /* ── Open / Close ── */
    function openDrawer() {
      overlay.classList.add('kyu-open');
      drawer.classList.add('kyu-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:22px;pointer-events:none;display:inline-block;vertical-align:middle;">close</span>';
      document.body.style.overflow = 'hidden';
    }

    window.closeDrawer = function () {
      overlay.classList.remove('kyu-open');
      drawer.classList.remove('kyu-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:22px;pointer-events:none;display:inline-block;vertical-align:middle;">menu</span>';
      document.body.style.overflow = '';
    };

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      drawer.classList.contains('kyu-open') ? closeDrawer() : openDrawer();
    });
    overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     NOTICES PAGE — FILTER TOGGLE
     Shows/hides the sidebar <aside> on mobile
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  function buildFilterToggle() {
    var grid = document.querySelector('.editorial-grid');
    if (!grid) return;
    var sidebar = grid.querySelector('aside');
    if (!sidebar) return;

    var toggle = document.createElement('button');
    toggle.className = 'kyu-filter-toggle';
    toggle.innerHTML =
      '<span class="material-symbols-outlined" style="font-size:16px;display:inline-block;vertical-align:middle;">filter_list</span>' +
      ' FILTER &amp; SORT';
    toggle.setAttribute('aria-expanded', 'false');

    /* Insert before the grid */
    grid.parentNode.insertBefore(toggle, grid);

    toggle.addEventListener('click', function () {
      var open = sidebar.classList.contains('sidebar-visible');
      if (open) {
        sidebar.classList.remove('sidebar-visible');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;display:inline-block;vertical-align:middle;">filter_list</span> FILTER &amp; SORT';
      } else {
        sidebar.classList.add('sidebar-visible');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;display:inline-block;vertical-align:middle;">filter_list_off</span> HIDE FILTERS';
        sidebar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     BOOT
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  document.addEventListener('DOMContentLoaded', function () {
    buildMobileNav();
    buildFilterToggle();
  });

})();
