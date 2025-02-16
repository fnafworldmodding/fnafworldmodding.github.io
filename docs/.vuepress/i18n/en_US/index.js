module.exports = {
  search: 'Search',
  
  locales: {
    lang: 'en_US',
    title: 'Sideloading Guide',
    description: 'A never-finished iOS Sideloading guide.',
  },
  
  themeConfig: {
  	selectLanguageName: "English",
  	backToHome: "Take me home",
  	contributorsText: "Contributors",
  	editLinkText: "Edit this page",
  	lastUpdatedText: "Last Updated",
  	openInNewWindow: "Open in new window",
  	selectLanguageAriaLabel: "Select language",
  	toggleDarkMode: "Toggle dark mode",
  	toggleSidebar: "Toggle sidebar",
    
    discordNoticeText: "For support in English, ask for help on the FNaF World Modding [Discord Server](https://discord.gg/b4nkySvb7R).",
    repoLabel: '<i class="fab fa-github"></i>',
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
  }
};
