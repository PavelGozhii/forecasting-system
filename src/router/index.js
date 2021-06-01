import Vue from 'vue'
import VueRouter from 'vue-router'
import UserHome from '../views/UserHome.vue'
import AdminHome from "../views/AdminHome.vue";
import Store from '@/store'
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Contacts from "../views/Contacts"
import AddHumanSettlement from "../views/AddSettlement"
import CityDetails from "../views/CityDetails";
import GetPredict from "../views/GetPredict";

Vue.use(VueRouter)

const routes = [
    {
        path: '/user',
        name: 'UserHome',
        component: UserHome,
        meta: {
            requiredAuth: true
        },
    },
    {
        path: '/admin',
        name: 'AdminHome',
        component: AdminHome,
        meta: {
            requiredAuth: true
        },
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: SignIn,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: SignUp,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: "/add-human-settlement",
        name: "AddHumanSettlement",
        component: AddHumanSettlement,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/view/element/:id',
        name: 'CityDetails',
        component: CityDetails,
        props: true,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/predict',
        name: 'GetPredict',
        component: GetPredict,
        meta: {
            requiredAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredAuth)) {
        if (!Store.getters["user/getAuthState"]) {
            next({
                path: '/sign-in'
            })
        } else {
            next()
        }
    } else {
        next();
    }
})

export default router
