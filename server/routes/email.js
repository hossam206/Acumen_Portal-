import { emailSender } from "../controllers/emailSender.js";
import { Router } from "express";

const emailSenderRouter = Router()

emailSenderRouter.post('/',emailSender)

export default emailSenderRouter;
