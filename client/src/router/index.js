import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import PathNotFound from '@/components/PathNotFound'
import VisitedStates from '@/components/VisitedStates'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/:pathMatch(.*)',
            name: 'PathNotFound',
            component: PathNotFound
        },
        {
            path: '/VisitedStates',
            name: 'VisitedStates',
            component: VisitedStates
        }
    ]
})