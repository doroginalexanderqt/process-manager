import React from 'react'
import { Badge } from 'antd'
import { Job } from '../../../../types'
import { JobStatusToComponentStatus } from '../../utils'

export const Status: React.FC<Job['status']> = (status) => (
    <Badge status={JobStatusToComponentStatus[status]} text={status}/>
)
