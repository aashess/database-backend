

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'aashish',
            email: 'work.aashesh@gmail.com'
        }
    })
    console.log("Created User: ", user);
    
}

main()
.catch((err) => console.error(err))
.finally(async () => await prisma.$disconnect());