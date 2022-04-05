import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from '../build/routes';
import * as swaggerUI from 'swagger-ui-express';
import * as swaggerJson from '../build/swagger.json';

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);

app.use(['/openapi', '/docs', '/swagger'], swaggerUI.serve, swaggerUI.setup(swaggerJson));
