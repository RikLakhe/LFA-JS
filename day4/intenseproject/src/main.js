import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Contact from './Contact.vue';
import Person from './Persons.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App },
    { path: '/contact', component: Contact },
    { path: '/person/:id', component: Person }

];

const router = new VueRouter({ routes: routes });

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})