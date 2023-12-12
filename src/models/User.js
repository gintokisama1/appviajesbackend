import { Schema, model } from "mongoose";
import * as bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    avatar: {
      type: String,
      default: "https://www.mi-avatar.com/default-avatar.jpg",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

export const UserModel = model("Usuario", UserSchema);
