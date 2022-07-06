const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//make schema to define the structure and make the model based on the schema.
//Schema is a constructor
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//the capitalized word in model is very important as it will look in there for the collection in the database.
const Post = mongoose.model("Post", postSchema);

//export the model to use it elsewhere in the project.
module.exports = Post;
