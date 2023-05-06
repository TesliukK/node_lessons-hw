"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_model_1 = require("../models/users.model");
class UserController {
    async getAll(req, res) {
        const users = await users_model_1.User.find();
        return res.json(users);
    }
    async getById(req, res) {
        const { userId } = req.params;
        const user = await users_model_1.User.findById(userId);
        return res.json(user);
    }
    async create(req, res) {
        const body = req.body;
        const user = await users_model_1.User.create(body);
        return res.status(201).json({
            message: "User created!",
            data: user,
        });
    }
    async update(req, res) {
        const { userId } = req.params;
        const user = req.body;
        const updatedUser = await users_model_1.User.updateOne({ _id: userId }, { ...user });
        return res.status(200).json({
            message: "User updated",
            data: updatedUser,
        });
    }
    async delete(req, res) {
        const { userId } = req.params;
        await users_model_1.User.deleteOne({ _id: userId });
        return res.status(200).json({
            message: "User deleted",
        });
    }
}
exports.userController = new UserController();
