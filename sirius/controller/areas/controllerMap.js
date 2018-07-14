"use strict";
const crowdController_1 = require("./crowd/crowdController");
const dispatch_1 = require("./dispatch");
var controllerMap;
(function (controllerMap_1) {
    controllerMap_1.controllerMap = [
        dispatch_1.default,
        crowdController_1.default
    ];
})(controllerMap || (controllerMap = {}));
module.exports = controllerMap;
//# sourceMappingURL=controllerMap.js.map