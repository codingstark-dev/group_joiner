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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../models/user_model");
const router = express_1.default.Router();
exports.router = router;
//Post request
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const dataItem = user_model_1.Todo.set({ title, description });
    yield dataItem.save();
    return res.status(200).json({
        data: dataItem,
    });
}));
//Get request
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataItem = yield user_model_1.Todo.find({});
        res.status(200).json({
            data: dataItem,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
//Delete Request
router.delete("/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {
        id: req.body.id,
    };
    const dataItem = yield user_model_1.Todo.deleteOne(filter)
        .then((data) => res.json({
        data: data,
    }))
        .catch((error) => {
        return res.send(error);
    });
}));
//Update request
router.put("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {
        id: req.body.id,
    };
    const updatedData = {
        title: req.body.title,
        description: req.body.description,
    };
    const dataItem = yield user_model_1.Todo.updateOne(filter, updatedData, {
        new: true,
    })
        .then((data) => res.json({
        data: data,
    }))
        .catch((error) => {
        return res.send(error);
    });
}));
