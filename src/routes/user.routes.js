import { create, getAllUsers, getId } from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post("/user", create);
  app.get("/user", getAllUsers);
  app.get("/user/:id", getId);
};

export default userRoutes;
