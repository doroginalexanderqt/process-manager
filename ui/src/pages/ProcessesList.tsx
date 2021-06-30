import React from 'react'
import { Layout } from 'antd'
import { ProcessesHeader, ProcessesListContent } from '../components/Processes'

export const ProcessesList = () => {
    return <Layout>
        <ProcessesHeader />
        <ProcessesListContent />
    </Layout>
}
