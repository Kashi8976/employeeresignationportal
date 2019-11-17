import React from 'react';
import { Table } from 'antd';

const columns = [
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Action By', dataIndex: 'actionBy', key: 'actionBy' },
    {
        title: 'Send Reminder',
        dataIndex: '',
        key: 'x',
        render: () => <a>Remind</a>,
    },
];

const data = [
    {
        key: 1,
        department: 'Manager',
        status: 'Approve',
        actionBy: 'Manager Name',
        description: 'Discussion is done, Approving the resignation',
    },
    {
        key: 2,
        department: 'Finance',
        status: 'Approve',
        actionBy: 'Finance Name',
        description: 'Finance section is clear, Approving the resignation',
    },
    {
        key: 3,
        department: 'Admin',
        status: 'Pending',
        actionBy: '-',
        description: '',
    },
];

function ResignationStatus() {
    return (
        <Table
            columns={columns}
            expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
            dataSource={data}
        />
    );
}

export default ResignationStatus;
