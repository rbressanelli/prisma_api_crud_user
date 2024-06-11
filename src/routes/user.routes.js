import { create, list } from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post("/user", create);
  app.get("/user", list)
};

export default userRoutes;
