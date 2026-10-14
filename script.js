// ---------- settings you may want to change ----------
// Where the download button points. For hosting, upload the .exe to GitHub Releases (or any file host)
// and put its direct link here, e.g. 'https://github.com/you/niro/releases/latest/download/NIRO_launcher.exe'
const DOWNLOAD_URL = 'downloads/NIRO_launcher.exe';
const VERSION = 'v1.0.0';
const FILE_SIZE_MB = 80;

// ---------- translations ----------
const T = {
  en: {
    nav_home: 'Home', nav_features: 'Features', nav_install: 'Install', nav_faq: 'FAQ', nav_download: 'Download',
    tick1: 'Fabric and Forge support', tick2: 'Modrinth built in: mods, packs, shaders', tick3: 'Skin changer and capes',
    tick4: 'Multiple versions and profiles', tick5: 'Microsoft or offline profile', tick6: 'Modern pink and black interface',
    download_for: 'DOWNLOAD FOR WINDOWS', available: 'Available for Windows',
    features_title: 'Everything you need to play',
    f1_t: 'Fabric and Forge', f1_d: 'Create a version with the mod loader you want. The loader downloads automatically the first time you press Play.',
    f2_t: 'Modrinth built in', f2_d: 'Search and install mods, resource packs and shaders without leaving the launcher. Required dependencies come along.',
    f3_t: 'Skin changer', f3_d: 'Keep a library of skins, copy a skin by username, switch Classic or Slim, and change capes on Microsoft accounts.',
    f4_t: 'Versions and profiles', f4_d: 'Keep as many versions as you like, each with its own mods, worlds and memory setting.',
    f5_t: 'Offline or Microsoft', f5_d: 'Sign in with Microsoft for online servers, or make an offline profile for local play. The launcher always tells you which one is active.',
    f6_t: 'Clear logs', f6_d: 'Download progress and game logs are one click away, and errors say what went wrong instead of pretending the game started.',
    install_title: 'Install in three steps',
    s1_t: 'Download', s1_d: 'Click the download button and save NIRO_launcher.exe.',
    s2_t: 'Run the installer', s2_d: 'If Windows says "Windows protected your PC", click More info, then Run anyway. Then follow the installer.',
    s3_t: 'Install Java and play', s3_d: "Install Java 21 from adoptium.net if you don't have it, open NIRO, pick a profile and press PLAY.",
    faq_title: 'FAQ',
    q1: 'Is NIRO Launcher free?', a1: 'Yes. You still need your own copy of Minecraft: Java Edition to join online servers.',
    q2: 'Why does Windows show a warning?', a2: 'The installer is not code-signed yet, so Windows SmartScreen warns about unknown apps. Click More info, then Run anyway.',
    q3: 'Can I join online servers with an offline profile?', a3: 'No. Offline profiles work for singleplayer and offline-mode servers only. Sign in with a Microsoft account that owns Minecraft: Java Edition to play on online servers.',
    q4: 'Do I need Java?', a4: 'Yes. Recent Minecraft versions need Java 17 or 21. Install Java 21 from adoptium.net. The launcher tells you if Java is missing or too old.',
    q5: 'Which systems are supported?', a5: 'Windows for now.',
    legal: 'Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang AB.',
    dl_title: 'Your download has started',
    dl_text: 'Open NIRO_launcher.exe when it finishes. If Windows shows "Windows protected your PC", click More info, then Run anyway.',
    dl_fallback: 'Nothing happened?', dl_again: 'Download again', dl_ok: 'Got it',
  },
  ka: {
    nav_home: 'მთავარი', nav_features: 'შესაძლებლობები', nav_install: 'ინსტალაცია', nav_faq: 'კითხვები', nav_download: 'ჩამოტვირთვა',
    tick1: 'Fabric და Forge-ის მხარდაჭერა', tick2: 'Modrinth პირდაპირ აპში: მოდები, პაკები, შეიდერები', tick3: 'სკინების და ქეიპების შეცვლა',
    tick4: 'რამდენიმე ვერსია და პროფილი', tick5: 'Microsoft ან ოფლაინ პროფილი', tick6: 'თანამედროვე ვარდისფერ-შავი ინტერფეისი',
    download_for: 'ჩამოტვირთვა WINDOWS-ისთვის', available: 'ხელმისაწვდომია Windows-ზე',
    features_title: 'ყველაფერი, რაც თამაშისთვის გჭირდება',
    f1_t: 'Fabric და Forge', f1_d: 'შექმენი ვერსია სასურველი მოდ-ლოადერით. ლოადერი ავტომატურად ჩამოიტვირთება პირველი PLAY-ის დროს.',
    f2_t: 'Modrinth აპში', f2_d: 'მოძებნე და დააინსტალირე მოდები, რესურს-პაკები და შეიდერები ლაუნჩერიდან გაუსვლელად. აუცილებელი დამოკიდებულებებიც ერთად ინსტალირდება.',
    f3_t: 'სკინის შემცვლელი', f3_d: 'შეინახე სკინების ბიბლიოთეკა, გადმოაკოპირე სკინი მომხმარებლის სახელით, აირჩიე Classic ან Slim და შეცვალე ქეიპი Microsoft ანგარიშზე.',
    f4_t: 'ვერსიები და პროფილები', f4_d: 'გქონდეს რამდენიც გინდა ვერსია, თითოეულს საკუთარი მოდები, სამყაროები და მეხსიერების პარამეტრი.',
    f5_t: 'ოფლაინ ან Microsoft', f5_d: 'Microsoft-ით შედი ონლაინ სერვერებზე, ან შექმენი ოფლაინ პროფილი ლოკალური თამაშისთვის. ლაუნჩერი ყოველთვის გიჩვენებს, რომელია აქტიური.',
    f6_t: 'გასაგები ლოგები', f6_d: 'ჩამოტვირთვის პროგრესი და თამაშის ლოგები ერთ კლიკზეა, შეცდომები კი ამბობს რა მოხდა და არ თვალთმაქცობს, თითქოს თამაში ჩაირთო.',
    install_title: 'ინსტალაცია სამ ნაბიჯში',
    s1_t: 'ჩამოტვირთე', s1_d: 'დააჭირე ჩამოტვირთვის ღილაკს და შეინახე NIRO_launcher.exe.',
    s2_t: 'გაუშვი ინსტალერი', s2_d: 'თუ Windows წერს „Windows protected your PC", დააჭირე More info, შემდეგ Run anyway. მერე მიჰყევი ინსტალერს.',
    s3_t: 'დააყენე Java და ითამაშე', s3_d: 'თუ Java არ გაქვს, დააყენე Java 21 adoptium.net-დან, გახსენი NIRO, აირჩიე პროფილი და დააჭირე PLAY.',
    faq_title: 'ხშირი კითხვები',
    q1: 'NIRO Launcher უფასოა?', a1: 'დიახ. ონლაინ სერვერებზე შესასვლელად მაინც საკუთარი Minecraft: Java Edition გჭირდება.',
    q2: 'რატომ გამოაქვს Windows-ს გაფრთხილება?', a2: 'ინსტალერს ჯერ ციფრული ხელმოწერა არ აქვს, ამიტომ Windows SmartScreen უცნობი აპების შესახებ აფრთხილებს. დააჭირე More info, შემდეგ Run anyway.',
    q3: 'ოფლაინ პროფილით შემიძლია ონლაინ სერვერებზე შესვლა?', a3: 'არა. ოფლაინ პროფილი მუშაობს singleplayer-ში და ოფლაინ რეჟიმის სერვერებზე. ონლაინ სერვერებისთვის შედი Microsoft ანგარიშით, რომელსაც Minecraft: Java Edition აქვს.',
    q4: 'მჭირდება Java?', a4: 'დიახ. ახალ Minecraft ვერსიებს Java 17 ან 21 სჭირდება. დააყენე Java 21 adoptium.net-დან. თუ Java არ არის ან ძველია, ლაუნჩერი გეტყვის.',
    q5: 'რომელი სისტემებია მხარდაჭერილი?', a5: 'ჯერ მხოლოდ Windows.',
    legal: 'Mojang-ისა და Microsoft-თან კავშირი არ აქვს. Minecraft Mojang AB-ის სავაჭრო ნიშანია.',
    dl_title: 'ჩამოტვირთვა დაიწყო',
    dl_text: 'დასრულებისას გახსენი NIRO_launcher.exe. თუ Windows წერს „Windows protected your PC", დააჭირე More info, შემდეგ Run anyway.',
    dl_fallback: 'არაფერი მოხდა?', dl_again: 'ჩამოტვირთე ხელახლა', dl_ok: 'გასაგებია',
  },
};

// ---------- language ----------
const langBtn = document.getElementById('lang');
function setLang(code) {
  const dict = T[code] || T.en;
  document.documentElement.lang = code;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v) el.textContent = v;
  });
  langBtn.textContent = code === 'en' ? 'KA' : 'EN';
  try { localStorage.setItem('niro-lang', code); } catch (e) { /* storage may be blocked */ }
}
const browserLang = (navigator.language || '').toLowerCase().startsWith('ka') ? 'ka' : 'en';
let lang = browserLang;
try { lang = localStorage.getItem('niro-lang') || browserLang; } catch (e) { /* storage may be blocked */ }
langBtn.addEventListener('click', () => setLang(document.documentElement.lang === 'en' ? 'ka' : 'en'));
setLang(lang);

// ---------- download buttons ----------
document.querySelectorAll('[data-download]').forEach((a) => a.setAttribute('href', DOWNLOAD_URL));
document.getElementById('file-meta').textContent = `${VERSION} \u00b7 ${FILE_SIZE_MB} MB`;
const dialog = document.getElementById('dl-dialog');
document.querySelectorAll('#main-download, .nav .btn').forEach((a) => {
  a.addEventListener('click', () => {
    // The browser starts the download from the link itself; this just shows what to do next.
    setTimeout(() => { if (typeof dialog.showModal === 'function' && !dialog.open) dialog.showModal(); }, 400);
  });
});
document.getElementById('dl-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

// ---------- misc ----------
document.getElementById('year').textContent = new Date().getFullYear();
const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll('.card, .steps li, details, .section > h2').forEach((el) => {
  el.classList.add('reveal');
  if (io) io.observe(el); else el.classList.add('in');
});
