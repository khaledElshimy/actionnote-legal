// Where ActionNote lives outside the app. One list for every page.
//
// Instagram has two accounts: actionnote.arab for the Arab countries and for
// anyone reading in Arabic, actionnote0 for everyone else. The country comes
// from assets/locale.js when the page loads it, otherwise from the time zone.
//
// Pages write plain links inside an element with data-social, so the links
// work with no script; this file turns them into icons with names. The home
// pages call ANSocial.html(lang) from their own rendering.
(function () {
  var ARAB_ZONES = ['Asia/Riyadh', 'Asia/Dubai', 'Asia/Qatar', 'Asia/Kuwait', 'Asia/Bahrain', 'Asia/Muscat',
    'Asia/Baghdad', 'Asia/Amman', 'Asia/Beirut', 'Asia/Damascus', 'Asia/Aden', 'Asia/Gaza', 'Asia/Hebron',
    'Africa/Cairo', 'Africa/Algiers', 'Africa/Tunis', 'Africa/Tripoli', 'Africa/Casablanca', 'Africa/El_Aaiun',
    'Africa/Khartoum', 'Africa/Nouakchott', 'Africa/Djibouti', 'Africa/Mogadishu', 'Indian/Comoro'];

  function arabicVisitor() {
    if (window.ANLocale && typeof window.ANLocale.arabic === 'boolean') return window.ANLocale.arabic;
    try { return ARAB_ZONES.indexOf(Intl.DateTimeFormat().resolvedOptions().timeZone) >= 0; } catch (e) { return false; }
  }

  var ICON = {
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z"/>',
    instagram: '<path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 4.86a4.94 4.94 0 1 0 0 9.88 4.94 4.94 0 0 0 0-9.88Zm0 8.15a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm5.14-9.5a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z"/>',
    tiktok: '<path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .58.04.85.12V9.15a6.3 6.3 0 1 0 5.45 6.25V8.6a7.6 7.6 0 0 0 4.4 1.4V6.6A4.4 4.4 0 0 1 16.6 2Z"/>'
  };

  function links(arabic) {
    return [
      { key: 'linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/company/actionnote' },
      { key: 'instagram', name: 'Instagram', href: arabic ? 'https://www.instagram.com/actionnote.arab/' : 'https://www.instagram.com/actionnote0/' },
      { key: 'tiktok', name: 'TikTok', href: 'https://www.tiktok.com/@action.note' }
    ];
  }

  function anchor(l) {
    return '<a class="an-soc" href="' + l.href + '" target="_blank" rel="noopener" data-umami-event="social-click" data-umami-event-place="' + l.key + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' + ICON[l.key] + '</svg><span>' + l.name + '</span></a>';
  }

  // lang: the language the page is showing; Arabic always gets the Arabic account
  function html(lang) {
    var arabic = lang === 'ar' || document.documentElement.lang === 'ar' || arabicVisitor();
    return links(arabic).map(anchor).join('');
  }

  var css = '.an-soc{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}' +
    '.an-soc svg{width:16px;height:16px;flex:none}' +
    '[data-social]{display:inline-flex;flex-wrap:wrap;gap:inherit;align-items:center}';
  var style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  function fill() {
    var all = document.querySelectorAll('[data-social]');
    for (var i = 0; i < all.length; i++) all[i].innerHTML = html(all[i].getAttribute('data-social'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fill); else fill();

  window.ANSocial = { html: html, links: links, arabic: arabicVisitor };
})();
