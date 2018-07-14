"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrowdRepository_1 = require("./../../../repositories/CrowdRepository");
class CrowdModel {
    constructor(schema) {
        this._visitorModel = schema;
    }
    static getCrowdStatus(q) {
        let p = new Promise((resolve, reject) => {
            let repo = new CrowdRepository_1.default();
            repo.retrieveLatestStatus({ type: q.type, location: q.location }, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
        return p;
    }
    static createCrowd() {
        let p = new Promise((resolve, reject) => {
            var today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date + ' ' + time;
            let repo = new CrowdRepository_1.default();
            let item = {
                uniqueId: '00123',
                count: 10,
                category: 'light',
                capturedDate: dateTime
            };
            repo.create(item, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
        return p;
    }
}
exports.default = CrowdModel;
//# sourceMappingURL=CrowdModel.js.map