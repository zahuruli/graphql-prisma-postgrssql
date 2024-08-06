const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPost = async (data) => {
  const posts = await prisma.post.create({
    data,
  });
  return posts;
};

const deletePost = async (id) => {
  await prisma.post.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
  return "Deleted successfully !";
};

const updatePost = async (id, updateData) => {
  const post = await prisma.post.update({
    where: {
      id: parseInt(id, 10),
    },
    data: updateData,
  });
  console.log(post);
  return post;
};
module.exports = { createPost, deletePost, updatePost };
