import React, { useMemo } from 'react'
import { Layout, Table, Spin } from 'antd'
import { columnDefinitions } from './columnDefinitions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchEverything } from '../../store/actions'
import { Store } from '../../store/reducers'
import JobsList from './JobsList'
import { loaderValues } from '../../constantValues'
import { getProcessesWithJobs, getLoaders } from '../../store/selectors'
import { EnrichedProcess } from './types'

const { Content } = Layout

export const ProcessesListContent = () => {
    const loaders = useSelector<Store, { [loaderKey: string]: boolean }>(getLoaders)

    const processesWithJobs = useSelector<Store, EnrichedProcess[]>(getProcessesWithJobs)

    const isLoading = useMemo(() =>  loaders[loaderValues.deleteProcess]
        || loaders[loaderValues.jobs] || loaders[loaderValues.processes], [loaders])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEverything())
    } ,[dispatch])

    const tableExpandable = useMemo(() => ({
        expandedRowRender: (process: EnrichedProcess) => <JobsList jobs={process.jobs}/>,
    }), [])

    return <Content>
        <Spin spinning={isLoading}>
            <Table
                rowKey="id"
                columns={columnDefinitions}
                pagination={{ pageSize: 10 }}
                expandable={tableExpandable}
                dataSource={processesWithJobs}
            />
        </Spin>
    </Content>
}
