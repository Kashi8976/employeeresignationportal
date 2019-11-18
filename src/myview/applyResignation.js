import React, {useEffect} from 'react';
import {Button, Descriptions, Input, Typography,Spin, Alert} from 'antd';
import {openNotificationWithIcon, submitResignation, getSubmittedResign, updateStatus} from "../utils/APIUtils";

const {TextArea} = Input;
const {Paragraph} = Typography;

function ApplyResignation(props) {
    let loginUser = props.user.user;
    let manager = props.user.manager;
    const [loading, setLoading] = React.useState(false);
    const [resignComment, setResignComment] = React.useState("");
    const [submittedResign, setSubmittedResign] = React.useState("");
    useEffect(() => {
        if(loginUser.status === 'FILED_RESIGNATION') {
            getSubmittedResign(props.user.id).then(response => {
                setSubmittedResign(response);
                setResignComment(response.reason);
                openNotificationWithIcon("info", 'Already Submitted Resignation', '')
            }).catch(error => {
                openNotificationWithIcon("error", 'Error in fetching Resignation', '')
            });

        }
    }, []);
    const submitResign = () => {
        setLoading(true);
        const resignRequest = {
            reason: resignComment,
            user_id: props.user.id,
        }
        submitResignation(resignRequest).then(response => {
            if (response) {
                setSubmittedResign(response);
                openNotificationWithIcon('success', 'Resignation Submitted Successfully', '');
            } else {
                window.location = '/';
            }
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            openNotificationWithIcon('error', 'Failed to Submit', '');

        });
        console.log(resignRequest);
    };
    const withdrawResignation = () => {
        setLoading(true);
        const resignRequest = {
            user_id: props.user.id,
            reason: resignComment,
            application_date: new Date(),
            status: "WITHDRAW"
        }
        updateStatus(props.user.id).then(response => {
            if (response) {
                window.location = '/';
                openNotificationWithIcon('success', 'Resignation WithDraw Successfully', '');
            } else {
                window.location = '/';
            }
            setLoading(false);
        }).catch(error => {
            openNotificationWithIcon('error', 'Failed to Withdraw Resignation', '');
            setLoading(false);
        });
        console.log(resignRequest);
    }
    return (
        <div>
            <Spin tip="In Progress..." spinning={loading}>
            <Descriptions bordered title="Employee Resignation Form" column={2}>
                <Descriptions.Item label="Name">{loginUser.name}</Descriptions.Item>
                <Descriptions.Item label="Employee ID">{loginUser.empId}</Descriptions.Item>
                <Descriptions.Item label="Manager Id">{manager.empId}</Descriptions.Item>
                <Descriptions.Item label="Manager Name">{manager.name}</Descriptions.Item>
                <Descriptions.Item label="Resignation Reason: " span={2}>
                    <TextArea
                        placeholder="Rejection Comments"
                        autoSize={{minRows: 3, maxRows: 5}}
                        onChange={e=> setResignComment(e.target.value)}
                        value={resignComment}
                        disabled={submittedResign}
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
                <Button className='resignation-btn' onClick={submitResign} disabled={submittedResign} type="danger">Submit</Button>
                <Button className='resignation-btn'>Cancel</Button>
                <Button  className='resignation-btn' onClick={withdrawResignation} disabled={!submittedResign} type="primary">Withdraw</Button>
            </div>
            </Spin>
        </div>
    );
}

export default ApplyResignation;
