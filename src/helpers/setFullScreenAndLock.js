/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

export default async () => {
  const element = document.documentElement;
  try {
    if (element.requestFullscreen) {
      await element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      await element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      await element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      await element.msRequestFullscreen();
    }
    await screen.orientation.lock('portrait');
  } catch (error) {
    console.log(error);
  }
};
