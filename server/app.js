const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

//Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// graphql middleware
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

// App listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});
