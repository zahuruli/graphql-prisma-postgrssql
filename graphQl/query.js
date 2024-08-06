const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const hello = () => {
  return "Hello World!";
};

const getPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};
const getSingePost = async (id) => {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id, 10) },
  });
  return post;
};
module.exports = { hello, getPosts, getSingePost };
