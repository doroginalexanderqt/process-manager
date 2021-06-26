export type Process = {
    id: string
    name: string
    startTime: number
    jobsCount: number
}

export enum JobStatus {
    running = 'running',
    succeed = 'succeed',
    failed = 'failed'
}

export type Job = {
    id: string
    processId: string
    name: string
    status: JobStatus
}

