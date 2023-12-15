import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    contenido: {
      type: String,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PostModel = model("Post", PostSchema);
