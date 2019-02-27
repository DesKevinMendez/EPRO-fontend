import Vue from 'vue';
import Router from 'vue-router';

import Auth from './Auth'
import NoAuth from './noAuth'

Vue.use(Router);

//Importar store para poder tener acceso al authModule para la proteccion de url
import store from '@/store';

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        Auth.home,
        Auth.about,
        //Rutas que no requieren inicio de sesion
        NoAuth.login,
        NoAuth.registro
    ],
});

//console.log(store.state.authModule.token)

//para cada cambio de ruta
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.meta.Auth && !store.getters.VERIFICAR_TOKENS) {
        next({ path: '/login' });
    } else {
        if (store.getters.VERIFICAR_TOKENS) {
            //Mutacion que toma el token y decodifica 
            store.commit("authModule/GETUSER");
        }

        next();

    }
});
//.para cada cambio de ruta
export default router;