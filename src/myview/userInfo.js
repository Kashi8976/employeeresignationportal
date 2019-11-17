import React from 'react';
import {Badge, Descriptions } from 'antd';

function UserInfo() {
    return (
        <Descriptions theme="dark" title="User Info" layout="vertical" bordered>
            <Descriptions.Item label="Name">Kashinath Shinge</Descriptions.Item>
            <Descriptions.Item label="Email Address">kshinge@mediaocean.com</Descriptions.Item>
            <Descriptions.Item label="Employee ID">MO-1409</Descriptions.Item>
            <Descriptions.Item label="Date Of Joining">2018-06-01</Descriptions.Item>
            <Descriptions.Item label="Project"> Prisma </Descriptions.Item>
            <Descriptions.Item label="Department"> Developer </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
                <Badge status="processing" text="Active" />
            </Descriptions.Item>
            <Descriptions.Item label="Manager Id">-</Descriptions.Item>
            <Descriptions.Item label="Manager Name" span={2}>Tanvi B</Descriptions.Item>
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
