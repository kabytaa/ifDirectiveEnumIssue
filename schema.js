'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

const fs = require('fs');
const tools = require('apollo-server');

const f = fs.readFileSync('schema.gql', 'utf8');

const schema = tools.makeExecutableSchema({ typeDefs: [f] });
// console.log(JSON.stringify(schema));
exports.default = schema;