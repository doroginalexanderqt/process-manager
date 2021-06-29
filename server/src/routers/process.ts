import express from 'express'
import {getProcesses, deleteProcess, createProcess} from './services'
export const processRouter = express.Router()

processRouter.get('/', async(req, res) => {
    try {
        const processes = await getProcesses()

        res.json(processes)
    } catch (e) {
        res.status(500).send(e)
    }
})

processRouter.delete('/:id',  async (req, res) => {
    try {
        await deleteProcess(req.params.id)

        res.status(204).send()
    } catch (e) {
        res.status(500).send(e)
    }
})

processRouter.post('/', async (req, res) => {
    try {
        const newProcess = await createProcess()

        res.status(201).json(newProcess)
    } catch (e) {
        res.status(500).send(e)
    }})
