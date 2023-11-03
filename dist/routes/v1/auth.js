"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../../controllers/auth.controller"));
// constants
let auth = (0, express_1.default)();
// routes /auth/
auth.post('/register', auth_controller_1.default.register);
auth.post('/signin', auth_controller_1.default.signIn);
auth.post('/signout', auth_controller_1.default.signOut);
exports.default = auth;
//# sourceMappingURL=auth.js.map