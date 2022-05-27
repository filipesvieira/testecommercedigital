import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

interface User {
    name: string,
    email: string,
};
let users: Array<User> = [];

export default async function get_all_users(req: NextApiRequest, res: NextApiResponse<User>) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    if (req.method === 'GET') {
        try {
            users = await prisma.user.findMany();
            res.status(200).json(JSON.parse(JSON.stringify(users)));
        } catch (error) {
            res.status(404);
            res.end();
        }
    } else {
        res.status(405);
        res.end();
    }
}