import { body, param, header } from "express-validator";
import { isValidObjectId } from "mongoose";
import { applyValidations } from "../../middlewares/apply-validations.js";

export const createPostValidations = [
  body("titulo")
    .notEmpty()
    .withMessage("El titulo no debe estar vacío.")
    .isString(),
  body("contenido")
    .notEmpty()
    .withMessage("El contenido no debe estar vacío.")
    .isString(),
  applyValidations,
];

export const listPostValidations = [
  header("authorization").exists(),
  applyValidations,
];

export const getPostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("Post ID no debe estar vacio.")
    .isString()
    .custom(isValidObjectId)
    .withMessage("Post ID debe ser un ID válido."),
  applyValidations,
];

export const updatePostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id valida."),
  body("title")
    .optional()
    .notEmpty()
    .withMessage("El campo { postId } no debe estar vacio.")
    .isString()
    .withMessage("El campo { postId } debe ser un string."),
  applyValidations,
];

export const deletePostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El parametro { postId } no debe estar vacio.")
    .isString()
    .withMessage("El parametro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parametro { postId } debe ser una id valida."),
  applyValidations,
];
