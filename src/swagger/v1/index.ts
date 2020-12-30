import 'dotenv/config';

import paths from './paths';
import definitions from './definitions';

const { ADMIN_EMAIL } = process.env;

export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'API',
    description: 'A Restfull API',
    contact: {
      name: 'Admin',
      email: ADMIN_EMAIL,
    },
  },
  basePath: '/api/v1/',
  produces: ['application/json'],
  consumes: ['application/json'],
  paths,
  definitions,
};
