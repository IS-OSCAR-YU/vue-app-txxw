import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/article/:id', component: Article },
        { path: '/news/', component: Home },
        { path: '*', component: Home }
    ]
})
