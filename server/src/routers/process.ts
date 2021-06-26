import express from 'express';
import { getProcesses, deleteProcess } from './services'
export const processRouter = express.Router()

processRouter.get('/', async(req, res) => {
    try {
        const processes = await getProcesses()

        res.json(processes)
    } catch (e) {
        res.status(500).send(e)
    }
})
processRouter.delete('/delete/:id', (req, res) => res.json(deleteProcess(req.params.id)))
