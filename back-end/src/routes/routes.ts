import createUserController from "../controllers/UserController";
import loginController from "../controllers/LoginController";

import { Router } from "express";
import createProduct from "../controllers/ProductController";

const router = Router();
// router.get("/", (req: Request, res: Response) => {
//   res.json({ Hello: "BABACA" });
// });

router.post("/register", createUserController);
router.post("/login", loginController);
router.post("/product", createProduct);

export default router;
