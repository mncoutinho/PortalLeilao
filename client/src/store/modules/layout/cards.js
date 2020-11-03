export default{
    state:{
        bid:{
            title: "brown--text text-center",
            description: "text-center",
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