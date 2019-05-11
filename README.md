# Steps used to develop this project
1. Used Windows 7 (but there's a high change the same happens on Windows 10).
2. Installed `Node.js` v10.15.3.
3. Installed `npm` 6.9.0.
4. Ran `npx create-react-app text-to-svg_bug`.
5. Installed `text-to-svg` (latest version as of this writing was 3.1.5).
6. Changed code.
7. Ran `npm run build`.
8. Installed `npm i -g serve`.
9. Ran `serve -s build`.
   1. This is necessary because `npm start` is currently broken on Internet Explorer.
10. Clicking on the text should print the `text-to-svg` object on the console.
    1. Works in Chrome
    2. Fails in Internet Explorer with `access denied`.
