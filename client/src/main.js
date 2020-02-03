import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"
import adicionarItem from "./pages/adicionarItem"
import Home from "./pages/home"
import vuetify from './plugins/vuetify';
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
		}
	]
})

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");
