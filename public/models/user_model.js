"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// //Delete request
// Future deleteData(String id) async {
//   final Uri restAPIURL =
//       Uri.parse("https://todoflutternodejs.herokuapp.com/delete");
//   http.Response response = await httpClient.delete(restAPIURL,
//       headers: customHeaders, body: jsonEncode(id));
//   return response.body;
// }
const todoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});
todoSchema.statics.set = (x) => {
    return new Todo(x);
};
const Todo = mongoose_1.default.model("Todo", todoSchema);
exports.Todo = Todo;
Todo.set({
    title: "some title",
    description: "some description",
});
