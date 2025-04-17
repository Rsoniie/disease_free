import { Router } from "express";
import { Pollen, Rhinitis, Mite, Insect, Mold } from "../controllers/questionsControllers";
const router = Router();

router.get('/pollen', Pollen);
router.get('/rhinitis', Rhinitis);
router.get('/mite', Mite);
router.get('/insect', Insect);
router.get('/mold', Mold);


export default router;