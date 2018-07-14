"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = require("./../infrastructure/data_access/baseRepository");
const ICrowdModel_1 = require("./../models/Areas/crowd/ICrowdModel");
class CrowdRepository extends baseRepository_1.default {
    constructor() {
        super(ICrowdModel_1.CrowdSchema);
    }
    retrieveLatestStatus(cond, callback) {
        ICrowdModel_1.CrowdSchema.find({ location: cond.location, type: cond.type }).sort({ capturedDate: -1 }).exec((err, res) => {
            callback(err, res);
        });
    }
}
exports.default = CrowdRepository;
//# sourceMappingURL=CrowdRepository.js.map