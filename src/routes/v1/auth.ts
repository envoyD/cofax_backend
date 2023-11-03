import express from 'express';
import AuthController from '../../controllers/auth.controller';

// constants
let auth = express();

// routes /auth/
auth.post('/register', AuthController.register)
auth.post('/signin', AuthController.signIn)
auth.post('/signout', AuthController.signOut)

export default auth;