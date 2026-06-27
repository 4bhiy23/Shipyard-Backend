// This file is created to test fetching data to and from the database
import express, { type Request, type Response } from 'express';
import { prisma } from '../libs/prisma';

const router = express.Router();

// Org
router.get('/', (req: Request, res: Response) => {
  res.json({
    title: 'Test API',
    success: 'True',
  });
});

router.get('/orgs', async (req: Request, res: Response) => {
  const fetchedOrgs = await prisma.org.findMany();
  return res.json(fetchedOrgs);
});

router.post('/orgs', async (req: Request, res: Response) => {
  const { name, slug } = req.body;
  const org = await prisma.org.create({
    data: {
      name,
      slug,
    },
  });

  return res.json(org);
});

// Project
router.get('/projects', async (req: Request, res: Response) => {
  const createdProject = await prisma.project.findMany();
  return res.json(createdProject);
});

router.post('/projects', async (req: Request, res: Response) => {
  const { orgId, name, key } = req.body;
  const createdProject = await prisma.project.create({
    data: {
      orgId,
      name,
      key,
    },
  });
  return res.json(createdProject);
});

export default router;
