import React from 'react'
import { Table } from 'antd'
import { columnDefinitions } from './columnDefinitions'
import { Job } from '../../../types'

type JobsListProps = { jobs: Job[] }

const JobsList: React.FC<JobsListProps> = ({ jobs  }) =>
    (<Table
        style={{ marginLeft: 100 }}
        columns={columnDefinitions}
        dataSource={jobs}
        pagination={false}
    />)

export default JobsList
