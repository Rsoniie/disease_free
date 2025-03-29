import { Router } from "express";
import { addTodo, analyzeForm, genericPrecautions } from "../controllers/appControllers.js";
import Verify from "../middlewares/isAuthorized.js";
const router = Router();

router.post('/analyze', Verify, analyzeForm);
router.post('/add_todos',Verify,  addTodo);
router.get('/generic', Verify, genericPrecautions);

export default router;
