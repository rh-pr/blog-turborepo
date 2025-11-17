/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'dotenv/config'; 
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';

const prisma = new PrismaClient();

function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]+/g, '');

  return `${base}-${randomUUID().slice(0, 8)}`;
}

type User = {
  name: string;
  email: string;
  bio: string | null;
  avatar: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
  id: number;
};

async function main() {
  const userIds: number[] = [];
  const usersData: User[] = [];
  

  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        bio: faker.lorem.sentence(),
        avatar: faker.image.avatar(),
      },
    });
    usersData.push(user);
  }

  usersData.forEach((user) => {
    userIds.push(user.id);
  });

  const posts = Array.from({ length: 40 }).map(() => ({
    title: faker.lorem.sentence(),
    slug: generateSlug(faker.lorem.sentence()),
    content: faker.lorem.paragraphs(3),
    thumbnail: faker.image.urlLoremFlickr(),
    authorId: faker.helpers.arrayElement(userIds),
    published: true,
  }));

  await Promise.all(
    posts.map(
      async (post) =>
        await prisma.post.create({
          data: {
            ...post,
            comments: {
              createMany: {
                data: Array.from({ length: 20 }).map(() => ({
                  content: faker.lorem.sentence(),
                  authorId: faker.helpers.arrayElement(userIds),
                })),
              },
            },
          },
        }),
    ),
  );

  console.log('Sending Completed!');
}

main()
  .then(() => {
    prisma.$disconnect();
    process.exit(0);
  })
  .catch((e) => {
    prisma.$disconnect();
    console.log(e);
    process.exit(1);
  });
