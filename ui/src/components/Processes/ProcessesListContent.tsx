import React from 'react'
import { Layout, Table } from 'antd'
import { buildColumnDefinitions } from './columnDefinitions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchJobs, fetchProcesses } from '../../store/actions'
import { Store } from '../../store/reducers'
import { Job, Process } from '../../types'
import JobsList from './JobsList'
import { getProcessesWithJobs } from './utils'

const { Content } = Layout


const ProcessesListContent = () => {
    // TODO: replace with reselect
    const processes = useSelector<Store>(({ processes }) => processes.data) as Process[]
    const jobs = useSelector<Store>(({ jobs }) => jobs.data) as Job[]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchJobs())
        dispatch(fetchProcesses())
    } ,[dispatch])

    const processesWithJobs = getProcessesWithJobs(processes, jobs)

    const columnDefinitions = buildColumnDefinitions(processesWithJobs)

    return <Content>
        <Table
            columns={columnDefinitions}
            expandable={{expandedRowRender: (process) => <JobsList jobs={process.jobs}/> }}
            dataSource={processesWithJobs}
        />
    </Content>
}
export default ProcessesListContent
