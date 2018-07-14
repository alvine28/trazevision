'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const express = require("express");
const index_1 = require("./sirius/controller/index");
// import CommandRegistry from './sirius/command/commandRegistry';
const config_1 = require("./config");
class AppStart {
    static bootstrap() {
        return new AppStart();
    }
    constructor() {
        this.server = express();
        this._config();
        this._routes();
        this._registerCommands();
        this._connect().then(() => {
            console.log("Connected on Mongodb");
            this._listen();
        });
    }
    _routes() {
        let router;
        router = express.Router();
        this.server.use('/public/v1', index_1.initializeGlobalRoute());
    }
    _config() {
        this.server.use(bodyparser.json());
        this.server.use(bodyparser.urlencoded({ extended: true }));
    }
    _connect() {
        let dbCon = 'mongodb://' + config_1.config.user + ':' + encodeURIComponent(config_1.config.password) + config_1.config.db;
        console.log(dbCon);
        return mongoose.connect(dbCon, config_1.config.options);
    }
    _listen() {
        this.server.listen(80, () => {
            console.log("Listening on port 80");
        });
    }
    _registerCommands() {
        // CommandRegistry.RegisterAllCommands();
    }
}
AppStart.bootstrap();
//# sourceMappingURL=index.js.map