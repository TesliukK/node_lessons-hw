"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = __importStar(require("mongoose"));
const users_model_1 = require("./models/users.model");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/users", async (req, res) => {
    const users = await users_model_1.User.find();
    res.json(users);
});
app.get("/users/:userId", async (req, res) => {
    const { userId } = req.params;
    const user = await users_model_1.User.findById(userId);
    return res.json(user);
});
app.post("/users", async (req, res) => {
    const body = req.body;
    const user = await users_model_1.User.create(body);
    res.status(201).json({
        message: "User created!",
        data: user,
    });
});
app.get("/welcome", (req, res) => {
    res.send("WELCOME");
});
const PORT = 5100;
app.listen(PORT, () => {
    mongoose.connect("mongodb://127.0.0.1:27017/user").then();
    console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});
