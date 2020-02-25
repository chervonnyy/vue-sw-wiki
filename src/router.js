import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Films from './components/Films';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [ 
        { path: '/', component: Home }, 
        { path: '/films', component: Films }
    ]
});