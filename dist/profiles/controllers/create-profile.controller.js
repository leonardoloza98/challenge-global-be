"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileController = void 0;
const utils_1 = require("../../utils/utils");
class CreateProfileController {
    constructor(createProfileUseCase) {
        this.createProfileUseCase = createProfileUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const response = yield this.createProfileUseCase.run(body);
                res.status(utils_1.RESPONSE_STATUS.SUCCESS).json({ response });
            }
            catch (error) {
                res.status(utils_1.RESPONSE_STATUS.ERROR).json({ message: error.message });
            }
        });
    }
}
exports.CreateProfileController = CreateProfileController;
