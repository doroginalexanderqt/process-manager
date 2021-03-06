import fs from 'fs/promises'
import faker from 'faker'
import { sortBy } from 'lodash'

import { Job, JobStatus, Process } from '../../../types'
import { getRandomInt } from './utils'
import moment from "moment"

type ReadDBShape = {
    jobs: Job[]
    processes: Process[]
}

const readDB = (): Promise<ReadDBShape> => fs.readFile(`${__dirname}/fake-db.json`, 'utf8').then(JSON.parse)

const writeDB = (newDB: { jobs: Job[]; processes: Process[] }): Promise<void> =>
    fs.writeFile(`${__dirname}/fake-db.json`, JSON.stringify(newDB,null ,2))

export const getJobs = async () => (await readDB()).jobs

export const getProcesses = async (sortField?: string)  => {
    const { processes } = (await readDB())

    return sortField ? sortBy(processes, sortField): processes
}

export const createProcess = async (): Promise<Process> => {
    const newProcess: Process = {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        startTime: moment().subtract(getRandomInt(1, 5), 'day').valueOf(),
        jobsCount: getRandomInt(1, 11) // [1; 10]
    }
    const newJobs: Job[] = Array.from(new Array(newProcess.jobsCount), () => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        status: faker.random.arrayElement([JobStatus.failed, JobStatus.running, JobStatus.succeed]),
        processId: newProcess.id
    }))

    const oldProcesses = await getProcesses()
    const oldJobs = await getJobs()
    await writeDB({ processes: oldProcesses.concat(newProcess), jobs: oldJobs.concat(newJobs) })

    return newProcess
}

export const deleteProcess = async (idToRemove: string) => {
    const oldProcesses = await getProcesses()
    const oldJobs = await getJobs()

    return await writeDB({
        processes: oldProcesses.filter(({ id }) => id !== idToRemove),
        jobs: oldJobs.filter(({ processId }) => processId !== idToRemove)
    })
}
