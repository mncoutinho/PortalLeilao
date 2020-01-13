const {ApolloServer} = require("apollo-server");
const typeDefs = `

    type Item {
        id: Int
        titulo: String
        description: String
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