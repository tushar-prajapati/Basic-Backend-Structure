import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, loginUser, logOutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(upload.single("avatar"),registerUser)
router.route("/login").post(loginUser);
//secured routes
router.route("/logout").post(verifyJWT,logOutUser)
router.route("/refreshAccessToken").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").post(verifyJWT,getCurrentUser)


export default router