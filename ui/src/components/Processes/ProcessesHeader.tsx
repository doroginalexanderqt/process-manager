import React from 'react'
import { Layout, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { createProcess } from '../../store/actions'

const { Header } = Layout

export const ProcessesHeader = () => {
    const dispatch = useDispatch()

    return <Header>
        <Button onClick={() => dispatch(createProcess())}> Add process </Button>
    </Header>
}
