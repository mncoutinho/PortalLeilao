import VueRouter from "vue-router";
import leiloeiroPage from "../pages/leiloeiroPage";
import logout from "../pages/logout";
import terminal from "../pages/terminal"
import gestor from "../pages/gestor"
import Home from "../pages/home";
import Leilao from "../pages/leilao";
import Login from "../pages/login";
import Criar from "../pages/criarconta";
import userpage from "../pages/userpage.vue";
import adicionarLeilao from "../pages/addLeilao";
import Produtos from "../pages/Produtos";
import adicionarItem from "../pages/adicionarItem";
import updateItem from "../pages/updateItem";
import meusProdutos from "../pages/meusProdutos"
import updateLeilao from "../pages/updateLeilao"



const router = new VueRouter({
    // rotas
    // precisa importar a página que vai ser referida a rota
    
        routes:[
            {
                path:"/adicionarItem",
                name:"adicionarItem",
                component:adicionarItem
            },
            {
                path:"/updateItem",
                name:"updateItem",
                component:updateItem
            },
            {
                path:"/Produtos",
                name:"Produtos",
                component:Produtos
            },
            {
                path:"/meusProdutos",
                name:"meusProdutos",
                component:meusProdutos
            },
            {
                path:"/criar",
                name:"criar",
                component:Criar
            },
            {
                path:"/login",
                name:"login",
                component:Login,
                
            },
            {
                path:"/",
                name:"Home",
                component:Home,
                
            },
            
            {
                path:"/leilao",
                name:"leilao",
                component:Leilao
            },
            {
                path:"/userpage",
                name:"userpage",
                component:userpage
            },
            {
                path:"/addLeilao",
                name:"addLeilao",
                component:adicionarLeilao
            },
            {
                path:"/updateLeilao",
                name:"updateLeilao",
                component:updateLeilao
            },
            {
                path:"/leiloeiro",
                name:"leiloeiroPage",
                component:leiloeiroPage
            },
            {
                path:"/sair",
                name:"sair",
                component:logout
            },
        {
            path: "/terminal",
            name: "terminal",
            component: terminal
        },
        {
            path:"/gestor",
            name:"gestor",
            component:gestor
        }
        ]
    });

export default router;