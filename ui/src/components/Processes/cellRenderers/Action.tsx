import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { Process } from '../../../types'
import { deleteProcess } from '../../../store/actions'
import { useCallback } from "react"


export const Action = (processId: Process['id']) => {
    const dispatch = useDispatch()
    const handleClick = useCallback(() => dispatch(deleteProcess(processId)), [dispatch, processId])
    return <Button type="primary" onClick={handleClick}>Delete</Button>
}
