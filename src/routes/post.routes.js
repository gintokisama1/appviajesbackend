import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlListPosts,
  ctrlGetPost,
  ctrlUpdatePost,
  ctrlDeletePost,
} from "../controllers/post.controller.js";
import {
  createPostValidations,
  listPostValidations,
  getPostValidations,
  updatePostValidations,
  deletePostValidations,
} from "../models/validations/post-validation.js";

const postRouter = Router();

postRouter.post("/", createPostValidations, ctrlCreatePost);
postRouter.get("/", listPostValidations, ctrlListPosts);
postRouter.get("/:postId", getPostValidations, ctrlGetPost);
postRouter.patch("/:postId", updatePostValidations, ctrlUpdatePost);
postRouter.delete("/:postId", deletePostValidations, ctrlDeletePost);

export { postRouter };
