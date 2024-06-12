import { create, getAll } from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post("/user", create);
  app.get("/user", getAll)
};

export default userRoutes;
