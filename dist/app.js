"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/v1/routes"));
const db_1 = require("./db");
// Load environment variables from .env file
dotenv_1.default.config();
// db connection
(0, db_1.connectDB)();
// constants
const app = (0, express_1.default)();
const port = process.env.PORT;
// root route
app.use('/v1/', routes_1.default);
// listen on default port
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map