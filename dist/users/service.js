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
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.create(data);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.findByIdAndUpdate(id, { deletedAt: new Date() });
        });
    }
    getAll(search) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.find({ deletedAt: { $exists: false }, name: { $regex: search, $options: 'i' } });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.findById(id);
        });
    }
}
exports.default = UserService;
