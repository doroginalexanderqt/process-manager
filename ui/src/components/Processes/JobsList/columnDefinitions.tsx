import { Status } from './celllRenderers'

export const columnDefinitions = [
    { title: 'Id', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: Status },
];
