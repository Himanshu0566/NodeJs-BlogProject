import mongoose from "mongoose";

const blogSchema = new mongoose.schema(
  {
    title: {},
    description: {},
    createdBy: { require: true },
    image: {},
    catogary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tags: {},
    likes: {
      type: Number,
    },
    comments: [
      {
        comments: {
          type: String,
        },
        UserId: {
          type: mongoose.Schema.Types.ObjectId,
          require: true,
          ref: "IUser",
        },
      },
    ],
  },
  { timestamp: true, versionKey: false },
);

const BlogModel = mongoose.model("Blog", blogSchema);
export default BlogModel;
