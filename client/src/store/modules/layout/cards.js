export default{
    state:{
        bid:{
            title: "brown--text text-center",
            description: "text-center",
            card:{
                type: "mt-6 mb-6 ",
                width: "300px",
                heigth: "300px",
                title: "subtitle-2",
                subtitle: "",
                content: ""
            },
            img:{
                type:"white--text align-end bold",
                height:"200px",
                width:"100%",
                gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            },
            pagesLimit:2
        },
        item:{
            title: "brown--text text-center",
            description: "text-center",

            layout: state => state.cards.item,
             gg: "ml-8",

        },
        
        btn:{
            type: "col-12 white--text",
            color: "brown"
        }
        
    }
}