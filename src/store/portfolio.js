// import PortfolioService from '@/services/PortfolioService.js'

const path = "img/portfolio/"
const portfolio= [
    {
      id: '1',
      mode: "tuto",
      url: 'travelagency-mod.netlify.app',
      img: path+'voyage.png',
      banner: path+'voyage.png',
      mod: 'voyage',
      slug: 'travel-agency',
      alt: 'travel agency',
      name: 'Travel Agency',
      desc: 'Premier site en HTML / CSS',
      tuto: true,
    },
    {
      id: '2',
      mode: "tuto",
      url: 'snakeey.netlify.app',
      img: path+'serpent.png',
      banner: path+'serpent.png',
      slug: 'snakeey',
      mod: 'snakeey',
      alt: 'snakeey',
      name: 'Snakeey',
      desc: 'Version JS de Snake',
      tuto: true,
    },
    {
      id: '3',
      mode: "tuto",
      url: 'topactrices.netlify.app',
      img: path+'actrices.png',
      banner: path+'color-image.jpg',
      alt: 'top 5 actrices',
      mod: 'actrices',
      slug: 'actrices',
      name: 'Top 5 Actrices',
      desc: 'Site en jQuery',
      tuto: true,
    },
    {
      id: '4',
      mode: "tuto",
      url: 'do-pe.netlify.app',
      img: path+'banner-overlay1.png',
      banner: path+'banner-overlay1.png',
      alt: 'do-pe',
      mod: 'dope',
      slug: 'dope',
      name: 'Do-Pe',
      tuto: true,
      desc: 'Site en VueJS 2',
    },
    
    {
      id: '5',
      mode: "self",
      url: 'pklinux.netlify.app',
      img: path+'pklinux.png',
      banner: path+'pklinux.png',
      alt: 'pklinux',
      mod: 'pklinux',
      slug: 'pklinux',
      name: 'PKLinux',
      desc: 'Site dédié à GNU/Linux',
    },
    
  ]

  export {portfolio}
