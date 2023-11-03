import UserService from "../services/user.service";

let express = require('express');
let router = express.Router();

const AuthController = {

    // ******** POST REQUESTS *********

    // /v1/auth/register
    register: async (req, res) => {
        try{
            const {email} = req.body
            if(await UserService.isExist(email)) return res.status(409).json("User already exist");

            const data = await UserService.createNew(email)

            res.json(data);
        }catch(err){
            res.err(err)
        }
    },

    // /v1/auth/signIn
    signIn: (req: Request, resp) => {

    },

    // /v1/auth/signOut
    signOut: (req: Request, resp) => {

    }
}

export default AuthController