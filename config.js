"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    db: "@traze.documents.azure.com:10255/traze?ssl=true&replicaSet=globaldb",
    user: 'traze',
    password: 'QFrMAmNsUF1FVM2MQ48GrIW94Hr8Lg7es8HLaEfXPWLgnEJ4ITkOENdkEGN3oueihckFm9h0L9ysa7EKUpl29g==',
    options: {
        // user:'traze',
        // password: "QFrMAmNsUF1FVM2MQ48GrIW94Hr8Lg7es8HLaEfXPWLgnEJ4ITkOENdkEGN3oueihckFm9h0L9ysa7EKUpl29g==",
        server: { socketOptions: { keepAlive: 1 } }
    }
};
// mongodb://traze:QFrMAmNsUF1FVM2MQ48GrIW94Hr8Lg7es8HLaEfXPWLgnEJ4ITkOENdkEGN3oueihckFm9h0L9ysa7EKUpl29g==@traze.documents.azure.com:10255/?ssl=true&replicaSet=globaldb
// mongo --host traze.documents.azure.com --port 10255 --username traze --password QFrMAmNsUF1FVM2MQ48GrIW94Hr8Lg7es8HLaEfXPWLgnEJ4ITkOENdkEGN3oueihckFm9h0L9ysa7EKUpl29g== --ssl
// db.crowd.insert(
// {
// 	uniqueId:1234124,
// 	count:10,
// 	category: 'light',
// 	capturedDate: 'Sat Jul 14 2018 11:52:07 GMT+0800 (Philippine Standard Time)'
// }) 
//# sourceMappingURL=config.js.map