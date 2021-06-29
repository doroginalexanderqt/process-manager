import React from 'react'
import { Badge } from 'antd'
import { EnrichedProcess } from '../types'
import { JobStatusToComponentStatus } from '../utils'

export const Status = ({ status }: EnrichedProcess) => <Badge
    text={status}
    status={JobStatusToComponentStatus[status]}
/>
