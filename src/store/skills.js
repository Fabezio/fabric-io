export const codes= [
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
          version: '3.0',
          img:
            'data:image/jpeg;base64,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',
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
  ]
// })
