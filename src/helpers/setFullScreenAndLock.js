/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

export default async () => {
  try {
    await document.body.requestFullscreen();
    await screen.orientation.lock('portrait');
  } catch (error) {
    console.log(error);
  }
};
