export default (name, size = '') => {
  const baseUrl = 'http://facetheforce.today/';
  const processedName = name.replace('-', '').toLowerCase();
  const characterUrl = processedName.startsWith('darth')
    ? processedName.replace(' ', '')
    : processedName.split(' ')[0];

  return `${baseUrl}${characterUrl}/${size}`;
};
