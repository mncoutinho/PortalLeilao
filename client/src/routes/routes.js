import VueRouter from "vue-router";
import leiloeiroPage from "../pages/leiloeiroPage";
import logout from "../pages/logout";
import Home from "../pages/home";
import Leilao from "../pages/leilao";
import Login from "../pages/login";
import Criar from "../pages/criarconta";
import userpage from "../pages/userpage.vue";
import Produtos from "../pages/Produtos";


const router = new VueRouter({
    // rotas
    // precisa importar a página que vai ser referida a rota
    
        routes:[        
            {
                path:"/Produtos",
                name:"Produtos",
                component:Produtos
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
                path:"/leiloeiro",
                name:"leiloeiroPage",
                component:leiloeiroPage
            },
            {
                path:"/sair",
                name:"sair",
                component:logout
            },
        ]
    });

export default router;