import React, { useState, useMemo } from 'react'
import { Layout, Table, Spin } from 'antd'
import { buildColumnDefinitions } from './columnDefinitions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchJobs, fetchProcesses } from '../../store/actions'
import { Store } from '../../store/reducers'
import JobsList from './JobsList'
import { loaderValues } from '../../constantValues'
import { getProcessesWithJobs } from '../../store/selectors'
import { EnrichedProcess } from './types'

const { Content } = Layout

export const ProcessesListContent = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>([])
    const loaders = useSelector<Store, { [loaderKey: string]: boolean }>(({ loaders }) => loaders)

    const processesWithJobs = useSelector<Store, EnrichedProcess[]>(getProcessesWithJobs)

    const isLoading = loaders[loaderValues.createProcess] || loaders[loaderValues.deleteProcess]
        || loaders[loaderValues.jobs] || loaders[loaderValues.processes]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchJobs())
        dispatch(fetchProcesses())
    } ,[dispatch])

    const columnDefinitions = useMemo(() => buildColumnDefinitions(processesWithJobs), [processesWithJobs])

    return <Content>
        <Spin spinning={isLoading}>
            <Table
                rowKey="id"
                columns={columnDefinitions}
                pagination={{ pageSize: 10 }}
                expandable={{
                    expandedRowRender: (process) => <JobsList jobs={process.jobs}/>,
                    expandedRowKeys: expandedRows,
                    onExpand: (shouldBeExpanded, { id }) => setExpandedRows(
                        shouldBeExpanded
                            ? [...expandedRows, id]
                            : expandedRows.filter(idToRemove => idToRemove !== id)
                    )
                }}
                dataSource={processesWithJobs}
            />
        </Spin>
    </Content>
}
