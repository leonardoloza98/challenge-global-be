"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_ts_1 = __importDefault(require("./swagger"));
const routes_1 = __importDefault(require("./users/routes"));
const router = (0, express_1.Router)();
router.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_ts_1.default));
router.use('/api/users', routes_1.default);
exports.default = router;
