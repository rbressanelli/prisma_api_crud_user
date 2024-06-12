import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
import { createUser, listUser } from "../repositories/user.repository";

export const create = async (req, res) => {
  try {
    await userValidation.validate(req.body)

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await listUser()
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error)
  }
}
