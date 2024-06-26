import express from "express";
import {signUp,signIn,updateProfile} from "../controller/player.controller.js";
import {body} from "express-validator";
import multer from "multer";
const upload=multer({dest:"public/images"});

const router = express.Router();
router.post("/signup",body("playername","playerName is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password should contain at least 8 letter").isLength({min: 8}),
body("email","email is required").notEmpty(),
body("email","Invalid email id").isEmail(),
body("mobile","mobile is required").notEmpty(),
body("mobile","only digit allowed").isNumeric(),
body("age","player age required").notEmpty(),
body("height","player height required ").notEmpty(),
body("type","player type is required").notEmpty(),signUp);
router.post("/update-profile",upload.single("image"),updateProfile);

router.post("/signIn",signIn);
export default router;