"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    uniqueId: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    capturedDate: {
        type: Date,
        required: true
    }
});
exports.CrowdSchema = mongoose_1.model('crowd', schema, 'crowd', true);
// export let emptyCrowdSchema = model<ICrowdModel>('crowd',new Schema(),'crowd',true);
//# sourceMappingURL=ICrowdModel.js.map