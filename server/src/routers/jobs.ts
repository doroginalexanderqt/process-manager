import express from 'express';
import { getJobs } from './services'
export const jobsRouter = express.Router()

jobsRouter.get('/', async (req, res) => {
    try {
        const jobs = await getJobs()

        res.json(jobs)
    } catch (e) {
        res.status(500).send(e)
    }
})
