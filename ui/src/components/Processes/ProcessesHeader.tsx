import React, { useCallback, useMemo } from 'react'
import { Layout, Button, Input } from 'antd'
import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { createProcess, searchJob } from '../../store/actions'
import { getLoaders } from '../../store/selectors'
import { Store } from '../../store/reducers'
const { Header } = Layout

const DEBOUNCE_TIME = 400

export const ProcessesHeader = () => {
    const dispatch = useDispatch()
    const handleClick = useCallback(() => dispatch(createProcess()), [dispatch])
    const isLoading = Object.values(useSelector<Store, { [key: string]: boolean}>(getLoaders)).some(Boolean)

    const debouncedSearch = useMemo(() => debounce((e) => dispatch(searchJob(e.target.value)), DEBOUNCE_TIME), [dispatch])

    return <Header>
            <Button onClick={handleClick} disabled={isLoading} loading={isLoading}> Add process </Button>
            <Input onChange={debouncedSearch} disabled={isLoading} placeholder="Filter by job name" style={{ marginLeft: 15, width: 200 }}/>
    </Header>
}
