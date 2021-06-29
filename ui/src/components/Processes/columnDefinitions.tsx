import { Action, StartTime, Status } from './cellRenderers'
import { EnrichedProcess } from './types'

export const buildColumnDefinitions = (processesWithJobs: EnrichedProcess[]) => {
    return [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'StartTime', dataIndex: 'startTime', key: 'startTime', render: StartTime},
        { title: 'Jobs Count', dataIndex: 'jobsCount', key: 'jobsCount' },
        { title: 'Status', dataIndex: '', key: 'status', render: Status },
        {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            render: Action,
        },
    ];
}
