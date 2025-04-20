# FG Tournament Overlay for OBS

A barebones as hell, browser-based overlay for fighting game tournaments. Designed for use with OBS Browser Sources.

## Features

- Live-updating player names and scores
- Clean, responsive layout
- Fully customizable styles via CSS
- Control panel for real-time updates
- Defaults as semi-transparent but nonetheless, OBS-friendly visuals

## Project Structure
```
overlay/ 
├── node_modules/| You can ignore this
├── public/ 
│ ├── script.js  | Handles live DOM updates 
│ ├── style.css  | Overlay styling 
├── control.html | Control panel for updates 
├── index.html   | Main overlay view (OBS loads this) 
├── data.json    | Stores current overlay state 
├── package.json 
├── package-lock.json 
└── server.js    | Express server entry point
```

## Run the damn thing
1. **Install dependencies** (Express):
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   node server.js
   ```

3. **Use it**:
   - Overlay: `http://localhost:3000` → Set as OBS Browser Source
   - Control Panel: `http://localhost:3000/control` → Update overlay in real time

## Features

- **Live updates**: Names, scores, round info update instantly
- **Simple backend**: No database cos `data.json` handles state
- **Transparent overlay**: Looks clean in-stream
- **No clutter**: Everything in `/public`, just HTML/CSS/JS

## Customization

- Modify `public/style.css` to:
  - Change fonts/colors
  - Add borders, rounded corners, shadows
  - Adjust layout or animation
- Use Google Fonts by editing the `<head>` in `index.html` or `control.html`
- Use ur imagination dawg idk

## Notes (kinda important)

- Make sure OBS **Browser Source → Hardware Acceleration** is enabled
- Test transparency with dark backgrounds
- External access? Use [ngrok](https://ngrok.com/) or [Cloudflared Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
