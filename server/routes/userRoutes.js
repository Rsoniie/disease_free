import { Router } from "express";
import { userLogin } from "../controllers/userControllers.js";
const route = Router();


route.post('/login',userLogin);