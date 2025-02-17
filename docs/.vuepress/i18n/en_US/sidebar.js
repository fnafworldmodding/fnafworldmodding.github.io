const support = {
  text: 'Support',
  children: [
    '/troubleshooting',
    '/faq',
    {
      text: 'Discord',
      link: 'https://discord.gg/b4nkySvb7R'
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
      ],
    },
    support,
    site,
  ],
  
  '/alternate/': [
    {
      text: '___ Guide',
      children: [
        '/alternate/page-one',
        '/alternate/page-two'
      ],
    },
    support,
    site,
  ]
}
