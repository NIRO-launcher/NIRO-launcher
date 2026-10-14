# NIRO Launcher website

Plain HTML, CSS and JavaScript. No build step.

## See it on your PC
Double-click `index.html`. The Download button saves `downloads/NIRO_launcher.exe`.

## Put it online (free)
1. **Upload the site** (everything except the `downloads` folder) to GitHub Pages, Netlify or Cloudflare Pages.
2. **Host the .exe separately.** Host files are often limited to 25-100 MB and your installer is about 80 MB.
   On GitHub, create a Release and attach `NIRO_launcher.exe`. Copy its direct link.
3. Open `script.js` and set the first line:
   ```js
   const DOWNLOAD_URL = 'https://github.com/YOU/REPO/releases/latest/download/NIRO_launcher.exe';
   ```
   Every Download button on the page uses that one link.

## New version of the launcher
Upload the new installer, then update `VERSION` and `FILE_SIZE_MB` in `script.js`.

## Languages
English and Georgian. The KA/EN button in the header switches; the choice is remembered. Texts are in `script.js`.
