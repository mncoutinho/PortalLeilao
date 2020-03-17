import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify';
//Dependencia do Vuex
import store from './store';
//Import de páginas
import adicionarItem from "./pages/adicionarItem";
import Home from "./pages/home";
import Leilao from "./pages/leilao";
import Login from "./pages/login";
import Criar from "./pages/criar";
Vue.use(VueRouter);

const router = new VueRouter({
// rotas
// precisa importar a página que vai ser referida a rota

	routes:[
		{
			path:"/adicionarItem",
			component:adicionarItem
		},
		{
			path:"/criar",
			component:Criar
		},
		{
			path:"/login",
			component:Login
		},
		{
			path:"/",
			component:Home
		},
		{
			path:"/leilao",
			component:Leilao
		}
	]
})

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount("#app");

