import { Router } from "express";
import controller from "./controller";
const router = Router();

router.get("/", controller.compare);
router.get("/test", controller.test);

export default router;
