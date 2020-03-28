/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */

export default async () => {
  try {
    const docElement = document.documentElement;
    const requestMethod =
      docElement.requestFullScreen ||
      docElement.webkitRequestFullScreen ||
      docElement.mozRequestFullScreen ||
      docElement.msRequestFullScreen;
    if (requestMethod) await requestMethod.call(docElement);
    await screen.orientation.lock('portrait');
  } catch (error) {
    console.log(error);
  }
};
