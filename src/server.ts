import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (request, response) => response.json({ message: 'ok' }));

app.listen('3333', () =>
  console.info(
    '\x1b[32m',
    '\x1b[1m',
    'Server is running on port 3333! 🚀',
    '\x1b[0m',
  ),
);
