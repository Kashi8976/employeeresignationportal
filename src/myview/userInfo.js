import React from 'react';
import {Badge, Descriptions } from 'antd';

function UserInfo(props) {
    let loginUser = props.user.user;
    let manager = props.user.manager;
    return (
        <Descriptions theme="dark" title="User Info" layout="vertical" bordered>
            <Descriptions.Item label="Name">{loginUser.name}</Descriptions.Item>
            <Descriptions.Item label="Email Address">{loginUser.email}</Descriptions.Item>
            <Descriptions.Item label="Employee ID">{loginUser.empId}</Descriptions.Item>
            <Descriptions.Item label="Date Of Joining">{loginUser.dateOfJoining.substring(0, 10)}</Descriptions.Item>
            <Descriptions.Item label="Project"> {loginUser.project} </Descriptions.Item>
            <Descriptions.Item label="Department"> - </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
                <Badge status="processing" text={loginUser.status} />
            </Descriptions.Item>
            <Descriptions.Item label="Manager Id">{manager.empId}</Descriptions.Item>
            <Descriptions.Item label="Manager Name" span={2}>{manager.name}</Descriptions.Item>
            <Descriptions.Item label="Location Info">
                Mediaocean Asia Pvt ltd
                <br />
                2nd Floor Tower B,
                <br />
                Cummins Campus
                <br />
                Balewadi High Street, Pune
                <br />
                Pune, Maharashtra 411045
                <br />
                India
                <br />
            </Descriptions.Item>
        </Descriptions>

    );
}

export default UserInfo;
