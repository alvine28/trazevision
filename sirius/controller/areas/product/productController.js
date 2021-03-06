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
const ProductModel_1 = require("./../../../models/Areas/Product/ProductModel");
class productController extends Controller_1.default {
    constructor() {
        super();
    }
    Index(req, res, next) {
        ProductModel_1.default.retrieveAllProduct().then(data => {
            res.send(data);
        }, reason => {
            res.send(reason);
        });
    }
    filterByProductType(req, res, next) {
        let productType = req.params.productType;
        ProductModel_1.default.filterByProductType(productType).then(data => {
            res.send(data);
        }, reason => {
            res.send(reason);
        });
    }
}
__decorate([
    Route_1.get('/')
], productController.prototype, "Index", null);
__decorate([
    Route_1.get('/:productType')
], productController.prototype, "filterByProductType", null);
exports.default = productController;
//# sourceMappingURL=productController.js.map