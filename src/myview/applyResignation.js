import React from 'react';
import {Button, Descriptions, Input, Typography} from 'antd';

const {TextArea} = Input;
const {Paragraph} = Typography;

function ApplyResignation() {
    return (
        <div>
            <Descriptions bordered title="Employee Resignation Form" column={2}>
                <Descriptions.Item label="Name">Kashinath Shinge</Descriptions.Item>
                <Descriptions.Item label="Employee ID">MO-1409</Descriptions.Item>
                <Descriptions.Item label="Manager Id">-</Descriptions.Item>
                <Descriptions.Item label="Manager Name">Tanvi B</Descriptions.Item>
                <Descriptions.Item label="Resignation Reason: " span={2}>
                    <TextArea
                        placeholder="Rejection Comments"
                        autoSize={{minRows: 3, maxRows: 5}}
                    />
                </Descriptions.Item>

            </Descriptions>
            <br/>
            <br/>
            <Paragraph>
                By Submitting resignation form I accept the Employee resignation and termination policies as per the
                Mediaocean Employees resignation Policies
            </Paragraph>
            <br/>
            <br/>
            <div>
                <Button className='resignation-btn' type="danger">Submit</Button>
                <Button className='resignation-btn'>Cancel</Button>
                <Button  className='resignation-btn' type="primary">Withdraw</Button>
            </div>
        </div>

    );
}

export default ApplyResignation;
