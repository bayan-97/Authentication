// this is the base url from GH docs

const URL = 'https://github.com/login/oauth/authorize';

const options = {
  client_id: '7841d18ce8eaae8f57cf',
  scope: 'read:user',
  state: '401 app consent',
};

const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURI(options[key])}`;
  })
  .join('&');

console.log('query', queryString);

const authURL = `${URL}?${queryString}`;

const linkTag = document.getElementById('oauth');
linkTag.setAttribute('href', authURL);