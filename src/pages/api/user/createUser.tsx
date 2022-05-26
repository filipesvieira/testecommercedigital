import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

interface ExtendedNextApiRequest extends NextApiRequest {
    query: {
        name: string;
        email: string;
    };
}

export default async function createUser(req: ExtendedNextApiRequest, res: NextApiResponse) {
    let prisma: PrismaClient;
    prisma = new PrismaClient();
    if (req.method === 'POST') {
        try {
            let users = await prisma.user.create({
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                    },
                  })
            res.status(200).json(JSON.parse(JSON.stringify(users)));
        } catch (error) {
            res.status(404).json(JSON.parse(JSON.stringify(error)));
            res.end();
        }
    } else {
        res.status(405);
        res.end();
    }
}