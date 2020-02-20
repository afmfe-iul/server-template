import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

// Construct schema.
const schema = buildSchema(`
  type Query {
    introduceYourself(name: String!): String!
  }
`);

// The root provides a resolver function for each API endpoint
const rootValue = {
  introduceYourself: ({ name }: { name: string }) => {
    return `Welcome ${name}!`;
  }
};

// Setup the express app.
const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue, graphiql: true }));

app.listen(5000, () => console.log("Server running... "));
