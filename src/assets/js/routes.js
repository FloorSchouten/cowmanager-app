import {createRouter, createWebHistory} from 'vue-router';
import Home from "../../components/Home.vue";
import About from "../../components/About.vue";
import Contact from "../../components/Contact.vue";

const routerHistory = createWebHistory();

const routes = [
    {
        path: '/Home',
        name: 'home',
        component: Home
    },
    {
        path: '/About',
        name: 'about',
        component: About
    },
    {
        path: '/Contact',
        name: 'contact',
        component: Contact
    }
];

const router = createRouter({ 
    history: routerHistory,
    routes 
});

export default router;