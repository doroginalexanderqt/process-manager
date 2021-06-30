import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { Process } from '../../../types'
import {deleteProcess} from "../../../store/actions";


export const Action = (process: Process) => {
    const dispatch = useDispatch()

    return <Button type="primary" onClick={() => dispatch(deleteProcess(process.id))}>Delete</Button>
}
