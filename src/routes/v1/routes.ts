import express from 'express';
import auth from './auth';

// constants
let routes = express();

// routes /auth/
routes.use('/auth', auth)

export default routes;