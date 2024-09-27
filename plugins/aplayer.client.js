import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('aplayer', (options) => {
    const player = new APlayer({
      element: document.getElementById(options.elementId),
      audio: options.audio,
    });
    player.init();
    return player;
  });
});