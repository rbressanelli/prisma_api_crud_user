import { prisma } from "../services/prisma";

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const getAll = async () => {
  const user = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const deleteUser = async (id) => {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return null;
};
