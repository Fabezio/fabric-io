export const state = () => ({
  logs: [
    {
      name: 'subscribe',
      color: 'btn-info',
      title: 'Inscription',
      icon: 'fas fa-user-plus',
      visible: true,
    },
    {
      name: 'login',
      color: 'btn-success',
      title: 'Connexion',
      icon: 'fas fa-sign-in-alt',
      visible: true,
    },
    {
      name: 'logout',
      color: 'btn-warning',
      title: 'Déconnexion',
      icon: 'fas fa-sign-out-alt',
      visible: false,
    },
  ],
})
