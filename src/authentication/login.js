import React from 'react';
import {Button, Checkbox, Col, Form, Icon, Input, notification, Row} from 'antd';
import './login.css';
import {login, openNotificationWithIcon, openNotificationWithFailure} from '../utils/APIUtils';
import {ACCESS_TOKEN} from "../constants";

export default class Login extends React.Component {
    state = {
        collapsed: false,
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let requestBody = {};
                requestBody.username = values.username;
                requestBody.password = values.password;
                login(requestBody)
                    .then(response => {
                        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                        openNotificationWithIcon('success', 'Login successful', '');
                        window.location = '/';
                    }).catch(error => {
                    openNotificationWithIcon('error', 'Login Failed', '');
                });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}> <img src='../mediaocean-logo.png' width='300px' height='100px'/></Col>
                    <Col span={8}></Col>
                </Row>
                <Row type="flex" justify="center" >
                    <Col span={8}></Col>
                    <Col span={8}>
                        <div className="">
                            <Form onSubmit={this.handleSubmit} className="login-form"
                                  label="Mediaocean Employee Resignation Portal">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{required: true, message: 'Please input your username!'}],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="Username"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>Remember me</Checkbox>)}
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        );
    }
};


