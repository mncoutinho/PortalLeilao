import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"
import adicionarItem from "./pages/adicionarItem"
import Home from "./pages/home"
import Leilao from "./pages/leilao"
import vuetify from './plugins/vuetify';
import store from './store'




Vue.use(VueRouter);

const router = new VueRouter({

	routes:[
		{
			path:"/adicionarItem",
			component:adicionarItem
		},
		{
			path:"/",
			component:Home
		},
		{
			path:"/leilao",
			component:Leilao
		},
		
		
	]
})

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount("#app");

