import { Router } from "express";
import { signUp, userLogin } from "../controllers/userControllers.js";
const router = Router();


router.post('/login',userLogin);
router.post('/signup', signUp);

export default router;