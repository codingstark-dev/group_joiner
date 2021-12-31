import mongoose from "mongoose";

interface GroupLinkI {
  GroupName: string;
  GroupCreateAt: Date;
  GroupLink: string;
  GroupType: string;
}

interface GroupDoc extends mongoose.Document {
  GroupName: string;
  GroupCreateAt: Date;
  GroupLink: string;
  GroupType?: string;
}
// //Delete request
// Future deleteData(String id) async {
//   final Uri restAPIURL =
//       Uri.parse("https://Linksflutternodejs.herokuapp.com/delete");

//   http.Response response = await httpClient.delete(restAPIURL,
//       headers: customHeaders, body: jsonEncode(id));

//   return response.body;
// }
const groupSchema = new mongoose.Schema({
  GroupCreateAt: {
    type: Date,
    required: false,
    default: Date.now
  },
  GroupLink: {
    type: String,
    required: true,

  },
  GroupName: {
    type: String,
    required: true,

  },
  GroupType: {
    type: String,
    required: true,

  },
});

interface groupModelInterface extends mongoose.Model<GroupDoc> {
  set(x: GroupLinkI): GroupDoc;
}

groupSchema.statics.set = (x: GroupLinkI) => {
  return new Links(x);
};

const Links = mongoose.model<GroupDoc, groupModelInterface>(
  "links",
  groupSchema
);

Links.set({
  GroupCreateAt: new Date(),
  GroupLink: "https://chat.whatsapp.com/invite/5Jd5Akx9RTYCIuJd4irwG6",
  GroupName: "hello",
  GroupType: "business",
});

export { Links };
