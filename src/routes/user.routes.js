import { create, getAllUsers, getId, update, delUser } from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post("/user", create);
  app.get("/user", getAllUsers);
  app.get("/user/:id", getId);
  app.patch("/user/:id/", update);
  app.delete("/user/:id", delUser);
};

export default userRoutes;
