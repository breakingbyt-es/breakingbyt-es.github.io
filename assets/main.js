/*
  main.js
  2026/11/03

  Landing page behavior: rotating status label + Vanta topology background.
  Requires p5.js and vanta.topology to be loaded first (see index.html).

  Breaking Bytes S.L. 2026
*/

"use strict";

// Random status label from a fixed set, rotating on a timer
const STATUS_TEXTS = [
  "DEVELOPING...", "RESEARCHING...", "ANALYZING MARKETS...", 
  "MONITORING COMPETITION...", "COMBOBULATING...", "CODING...", 
  "BABYSITTING LLMS..."];
const statusEl = document.querySelector(".status-text");
let lastStatus = -1;
const rollStatus = () => {
  let i;
  do { i = Math.floor(Math.random() * STATUS_TEXTS.length); }
  while (i === lastStatus && STATUS_TEXTS.length > 1);
  lastStatus = i;
  statusEl.textContent = STATUS_TEXTS[i];
};
rollStatus();
setInterval(rollStatus, 4000);

// npm build registers the namespace as window.VANTA (all caps)
const VantaNS = window.VANTA || window.Vanta;
VantaNS.TOPOLOGY({
  el: "#vanta-bg",
  color: 0x7f1d1d,        // dark red wire (fainter)
  baseColor: 0x0a0a0b,    // near-black base
  backgroundColor: 0x030304,
  backgroundAlpha: 0.5,  // near-opaque repaint: faint trails, low visibility
  gyroControls: true,
  speed: 1.0,
  scale: 1,
  scaleMobile: 1.00,
  scaleBackground: 1,
  zoom: 0.28
});
