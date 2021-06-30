import React from 'react'
import { Layout, Button } from 'antd'

const { Header } = Layout

export const ProcessesHeader = () => {
    return <Header>
        <Button onClick={() => console.log('fake add process handler')}> Add process </Button>
    </Header>
}
