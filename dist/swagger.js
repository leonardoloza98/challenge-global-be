"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YAML = require('js-yaml');
const fs = require('node:fs');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'My API description'
        }
    },
    apis: [],
    swaggerDefinition: YAML.load(fs.readFileSync('./src/openapi.yaml', 'utf8')),
};
const specs = swaggerJSDoc(swaggerOptions);
exports.default = specs;
