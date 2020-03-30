/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  plugins: [
    // Google Analytics track ID
    docuteGoogleAnalytics('UA-162117119-2')
  ] ,
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Status',
      link: 'https://status.antiproxies.com'
    },
    {
      title: 'Discord',
      link: 'https://discord.gg/5YPUBPz'
    },
    {
      title: 'Back to website',
      link: 'https://antiproxies.com'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/introduction'
        },
        {
          title: 'Installation',
          link: '/installation'
        }
      ]
    }
  ]
})
