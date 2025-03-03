const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc")

const swaggerOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "A simple API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "API Server"
      },
    ],
    tags: [
      {
        name: 'Users',
        description: 'Operations related to users',
      },
      {
        name: 'Download', 
        description: 'Operations related to downloads',
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOption)

module.exports = { swaggerUi , swaggerSpec}