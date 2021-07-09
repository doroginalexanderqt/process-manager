import { Action, StartTime, Status } from './cellRenderers'
import { EnrichedProcess } from './types'

export const columnDefinitions = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a: EnrichedProcess, b: EnrichedProcess) => a.name.localeCompare(b.name) },
        { title: 'StartTime', dataIndex: 'startTime', key: 'startTime', render: StartTime, sorter: (a: EnrichedProcess, b: EnrichedProcess) => a.startTime - b.startTime },
        { title: 'Jobs Count', dataIndex: 'jobsCount', key: 'jobsCount', sorter: (a: EnrichedProcess, b: EnrichedProcess) => a.jobsCount - b.jobsCount },
        { title: 'Status', dataIndex: 'status', key: 'status', render: Status, sorter: (a: EnrichedProcess, b: EnrichedProcess) => a.status.localeCompare(b.status)},
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: Action,
        },
    ]
