const support = {
  text: 'Support',
  children: [
    '/troubleshooting',
    '/faq',
    {
      text: 'Discord',
      link: 'https://discord.gg/fnafworld'
    }
  ],
}

const site = {
  text: 'Site',
  children: [
    '/credits',
    '/donations',
    '/site-navigation',
  ],
}

module.exports = {
  '/': [
    {
      text: 'Sideloading Guide',
      children: [
        '/firmware-selection',
        '/installing-scarlet',
        '/installing-sideloadly',
        '/using-trollstore',
        '/using-certs',
      ],
    },
    support,
    site,
  ],

}
