"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./../../../infrastructure/Controller");
const Route_1 = require("./../../../infrastructure/Route");
const CrowdModel_1 = require("./../../../models/Areas/crowd/CrowdModel");
class crowdController extends Controller_1.default {
    constructor() {
        super();
    }
    Index(req, res, next) {
        console.log(req.params.type);
        console.log(req.params.location);
        if (!req.params.type || !req.params.location)
            res.sendStatus(400);
        CrowdModel_1.default.getCrowdStatus({ type: req.params.type, location: req.params.location }).then((resolve) => {
            let currentStatus = {
                count: resolve[0].count,
                category: resolve[0].category,
                location: resolve[0].location,
                type: resolve[0].type
            };
            res.send(currentStatus);
        }, (reject) => {
            res.send(reject);
        });
    }
}
__decorate([
    Route_1.get('/:type/:location')
], crowdController.prototype, "Index", null);
exports.default = crowdController;
//# sourceMappingURL=crowdController.js.map