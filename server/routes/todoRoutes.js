import { Router } from "express";
import Verify from '../middlewares/isAuthorized.js';
import {saveTodo, getAll} from '../controllers/todoControllers.js'
const router = Router();

router.get('/all_todos', Verify, getAll);
router.post('/save_todos', Verify, saveTodo);

export default router;