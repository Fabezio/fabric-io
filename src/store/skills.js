export const state = () => ({
  codes: [
    {
      title: 'Classique',
      content: [
        {
          name: 'HTML',
          version: 5.2,
          img:
            'https://juststickers.in/wp-content/uploads/2014/05/HTML5-Mark-Shape-Cut.png',
          desc: 'Langage de balisage dédié au contenu du site',
        },
        {
          name: 'CSS',
          version: 3,
          img:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png',
          desc: 'Feuilles de style pour la mise en forme des pages',
        },
        {
          name: 'JavaScript',
          img:
            'https://addons-media.operacdn.com/media/CACHE/images/extensions/65/203065/1.2.4.1-rev2/images/0cded3a3276425911d55a2552bf361bf/7852aa99f857cd72012843b4cce5090f.jpg',

          version: '1.8, norme ES-9',
          desc: "Langage de programmation, dynamise l'application",
        },

        // {

        //   name: "Node-JS",
        //   img:
        //     "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",
        //   version: '12.13 (LTS)**',
        //   desc: "Librairie JavaScript appliquée aux serveurs"
        // }
      ],
    },
    {
      title: 'Style',
      content: [
        {
          name: 'Bootstrap',
          version: 4.3,
          img:
            'http://www.dxpdance.com.au/wp-content/uploads/2016/03/bootstrap-logo.jpg',
          desc: 'Framework CSS facilitant la mise en forme, bibliothèque Sass',
        },
        {
          name: 'Bulma',
          version: '0.8',
          img: 'https://jgthms.com/web-design-in-4-minutes/bulma.png',
          desc: 'Framework semblable à BootStrap, bibliothèque Sass',
        },
        {
          name: 'Vuetify',
          version: '2.0',
          img:
            'https://external-preview.redd.it/AOJtwr7lW8E4k5rsua3rPoky1ySO_34UkAVmm6PuVpM.jpg?auto=webp&s=2645657b4d14ff6f7321db22bcb96f4652876af8',
          desc: 'Framework semblable à BootStrap, bibliothèque Sass',
        },
        {
          name: 'Tailwind',
          version: '1.x',
          img:
            'https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg',
          desc: 'librairie utilitaire css',
        },
      ],
    },
    {
      title: 'Rendu',
      content: [
        /*
        {
          name: 'React',
          version: '16.11',
          img:
            'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            desc: 'Framework JS facilitant la création des sites web'
          },
          */
        {
          name: 'Vue JS',
          version: '2.6',
          img:
            'https://banner2.cleanpng.com/20180718/cbh/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1bc45884.1915769815318871318042.jpg',
          desc: 'Semblable à React, en plus simple et complet',
        },
        {
          name: 'Nuxt',
          version: '2.11',
          img:
            'https://cosmic-s3.imgix.net/9af92d20-31d0-11e8-b24f-2f60c3c01c65-nuxtjs-cosmicjs.png',
          desc: 'Framework utilisant VueJS pour des applis universelles ',
        },
        {
          name: 'Svelte JS',
          version: '3.0',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png',
          desc:
            "Framework js dont les fonctionnalités s'appuient sur la compilation",
        },
        {
          name: 'Sapper',
          version: '0.9',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFnmBQysC_SpxOyGXiudJjrwUnuB5Okktc_A&usqp=CAU',
          desc: 'Framework utilisant Svelte JS pour des applis universelles ',
        },
      ],
    },
    {
      title: 'Préprocesseurs',
      content: [
        {
          name: 'Sass',
          version: '1.22',
          img:
            'http://www.freelogovectors.net/wp-content/uploads/2019/02/sass-logo.png',
          desc: 'Préprocesseur CSS',
        },
        {
          name: 'Pug',
          version: '2.0',
          img:
            'https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg',
          desc: 'Préprocesseur HTML - anciennement Jade ',
          otherLogo:
            '<img src="https://s3.amazonaws.com/oodles-technologies1/blog-images/d73085c7-ff2c-4edb-9a72-8e1333dac14e.png" width="24px" alt="">',
        },
        {
          name: 'Stylus',
          version: '0.54',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Stylus-logo.svg/393px-Stylus-logo.svg.png',
          desc: 'préprocesseur css basé sur sass et less',
        },
      ],
    },
    {
      title: 'Autres',
      content: [
        {
          name: 'Git',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/768px-Git_icon.svg.png',
          version: 2.23,
          desc: 'Application servant à versionner ses codes',
        },
        {
          name: 'GitHub',
          img:
            'https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/GITHUB-512.png',
          version: 2.23,
          desc: 'Un cloud pour les codeurs, basé sur git',
        },
        {
          name: 'Python',
          version: 3.8,
          img:
            'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png',
          desc:
            'Langage de programmation, plébiscité en Big Data et Machine Learning',
        },

        // {
        //   name: 'Django',
        //   version: 3.1,
        //   img: 'https://icon-library.com/images/django-icon/django-icon-0.jpg',
        //   desc: 'Framework de développement web utilisant Python',
        // },

        {
          name: 'bash',
          version: '5.0',
          img:
            'https://cdn3.brettterpstra.com/uploads/2015/02/terminal-longshadow.png',
          desc: 'Langage de scripts, largement utilisé sous Linux',
        },
        // {
        //   name: 'Java',
        //   version: '11.0',
        //   img:
        //     'https://tech-computer.fr/wp-content/uploads/2017/03/004-java.png',
        //   desc: 'Langage de programmation multiplateforme, très complet',
        // },
        // {
        //   name: 'Go / Golang',
        //   version: '5.0',
        //   img:
        //     'https://www.pikpng.com/pngl/m/455-4550459_golang-logo-go-logo-png-clipart.png',
        //   desc:
        //     'Langage de programmation rassemblant les fonctionnalités de C, Python, Java & Google',
        // },
      ],
    },
  ],
})
