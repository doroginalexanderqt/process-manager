import React from 'react'
import { Layout, Table, Spin } from 'antd'
import { buildColumnDefinitions } from './columnDefinitions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchJobs, fetchProcesses } from '../../store/actions'
import { Store } from '../../store/reducers'
import { Job, Process } from '../../types'
import JobsList from './JobsList'
import { getProcessesWithJobs } from './utils'
import { loaderValues } from '../../constantValues'

const { Content } = Layout

export const ProcessesListContent = () => {
    // TODO: replace with reselect
    const processes = useSelector<Store>(({ processes }) => processes.data) as Process[]
    const jobs = useSelector<Store>(({ jobs }) => jobs.data) as Job[]
    const loaders = useSelector<Store>(({ loaders }) => loaders) as { [loaderKey: string]: boolean }

    const isLoading = loaders[loaderValues.createProcess] || loaders[loaderValues.jobs]
        || loaders[loaderValues.processes]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchJobs())
        dispatch(fetchProcesses())
    } ,[dispatch])

    const processesWithJobs = getProcessesWithJobs(processes, jobs)

    const columnDefinitions = buildColumnDefinitions(processesWithJobs)

    return <Content>
        <Spin spinning={isLoading}>
            <Table
                columns={columnDefinitions}
                expandable={{expandedRowRender: (process) => <JobsList jobs={process.jobs}/> }}
                dataSource={processesWithJobs}
            />
        </Spin>
    </Content>
}
