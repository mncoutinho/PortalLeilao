const {ApolloServer} = require("apollo-server");
const typeDefs = `

    type Item {
        id: Int
        name: String
        description: String
        category: String
        madefrom:String
        lances: Int
        initialbid:Float
        image: Image
    }
    type Image {
        id: Int
        src: String
        
    }
    type Query {
        artigos: [Item]
    }

`;

const item = [
    {id: 1, titulo: "Vaso Ming", description: "Muito Velho"}
];

const resolvers = {
    Query: {
        artigos() {
           return item;
        }
    }
};

const server = new ApolloServer({typeDefs,resolvers});
server.listen();
console.log(ApolloServer);