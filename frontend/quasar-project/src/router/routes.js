const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/PopisSvihKnjiga', component: () => import('pages/PopisSvihKnjigaPage.vue') },
      { path: '/Pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/ONama', component: () => import('pages/ONamaPage.vue') },
      { path: '/Lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: '/Login', component: () => import('pages/LoginPage.vue') },
      { path: '/Registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/Provjera', component: () => import('pages/ProvjeraPage.vue') }
    ]
  },

  // ERROR poruka 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
