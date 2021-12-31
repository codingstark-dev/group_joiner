import mongoose from 'mongoose';
interface CategoryI {
    GroupType: string;
    image: string;
}

interface CategoryDoc extends mongoose.Document {
    GroupType: string;
    image: string;

}
// //Delete request
// Future deleteData(String id) async {
//   final Uri restAPIURL =
//       Uri.parse("https://Linksflutternodejs.herokuapp.com/delete");

//   http.Response response = await httpClient.delete(restAPIURL,
//       headers: customHeaders, body: jsonEncode(id));

//   return response.body;
// }
const categorySchema = new mongoose.Schema({
    GroupType: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    }
});

interface categoryModelInterface extends mongoose.Model<CategoryDoc> {
    set(x: CategoryI): CategoryDoc;
}

categorySchema.statics.set = (x: CategoryI) => {
    return new Category(x);
};

const Category = mongoose.model<CategoryDoc, categoryModelInterface>(
    "category",
    categorySchema
);

Category.set({
    GroupType: "Friends",
    image: 'https://cdn.mos.cms.futurecdn.net/PHpPMacPX2Y9PqWXvCVdJg-320-80.jpg'
});


export default Category;