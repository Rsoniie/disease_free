import { Router } from "express";
import Precautions from "../controllers/precautionControllers.js";
const router = Router();

router.get('/precautions', Precautions);

export default router;