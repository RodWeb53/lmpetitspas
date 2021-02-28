import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LesEnfants from '../views/LesEnfants.vue'
import LesTherapies from '../views/LesTherapies.vue'
import Actualites from '../views/Actualites.vue'
import Evenements from '../views/Evenements.vue'
import Contact from '../views/Contact.vue'
import Myotenofasciotomie from '../views/Myotenofasciotomie.vue'
import Essentis from '../views/Essentis.vue'
import Biofeedback from '../views/Biofeedback.vue'
import Mars from '../views/Mars.vue'

const routes = [
  { path: '/',
    name: 'Home',
    component: Home },
  { path: '/LesEnfants',
    name: 'LesEnfants',
    component: LesEnfants },
    { path: '/LesTherapies',
    name: 'LesTherapies',
    component: LesTherapies },
    { path: '/Actualites',
    name: 'Actualites',
    component: Actualites },
    { path: '/Evenements',
    name: 'Evenements',
    component: Evenements },
    { path: '/Contact',
    name: 'Contact',
    component: Contact },
    { path: '/Myotenofasciotomie',
    name: 'Myotenofasciotomie',
    component: Myotenofasciotomie },
    { path: '/Essentis',
    name: 'Essentis',
    component: Essentis },
    { path: '/Biofeedback',
    name: 'Biofeedback',
    component: Biofeedback },
    { path: '/Mars',
    name: 'Mars',
    component: Mars },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router