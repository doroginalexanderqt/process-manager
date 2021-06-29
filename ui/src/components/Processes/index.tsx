import { Layout } from 'antd'
import ProcessesHeader from './ProcessesHeader'
import JobsContent from './ProcessesListContent'

export const JobsList = () => {
    return <Layout>
        <ProcessesHeader />
        <JobsContent />
    </Layout>
}
