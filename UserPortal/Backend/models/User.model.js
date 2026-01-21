import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isMarried: {
      type: Boolean,
    },
  },
  {
    versionKey: false, //! to remove __v field
    timestamps: true, // it adds createdAt and updatedAt fields
  }
);

let UserModel = mongoose.model("User", userSchema);
//? model("collectionName", "schema") takes two argument, collection-name and schema, it will convert the schema into mongodb collection
//~ the collection name will be (lowercase + plural) -> users

export default UserModel;

//! all the validations are happening at database level
