import express from "express";
import accountantRoute from "./accountant.js";
import usersRoute from "./users.js";
import loginRoute from "./login.js";
import emailSenderRouter from "./email.js";
import helpersRoute from "./helpers/helpers.js";

// import {
//   roleMiddleware,
//   authMiddleware,
// } from "./../middlewares/Middlewares.js";

const router = express.Router();

router.use("/v1/login", loginRoute);
router.use("/v1/accountant", accountantRoute);
router.use("/v1", usersRoute);
router.use("/v1/emailsender", emailSenderRouter);
router.use("/v1/helpers", helpersRoute);
// /v1/Students/Count

export default router;

// module.exports=router
