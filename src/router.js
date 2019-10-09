import Index from './views/Index.vue'
import Cases from './views/Cases.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Index },
    { path: '/cases', component: Cases }
]

export const router = new VueRouter({
    routes: routes,
})
