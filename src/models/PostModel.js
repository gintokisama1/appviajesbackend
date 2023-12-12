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
    comentarios: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comentario",
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PostModel = model("Post", PostSchema);
