import VueRouter from "vue-router";
import adicionarItem from "../pages/adicionarItem";
import Home from "../pages/home";
import Leilao from "../pages/leilao";
import Login from "../pages/login";
import Criar from "../pages/criarconta";
import Produtos from "../pages/Produtos";

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
                path:"/Produtos",
                component:Produtos
            },
            {
                path:"/leilao",
                component:Leilao
            }
        ]
    });

export default router;