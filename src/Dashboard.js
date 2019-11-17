import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Breadcrumb, Icon, Layout, Menu, Row, Col, Avatar , Button} from "antd";
import UserInfo from "./myview/userInfo";
import ApplyResignation from "./myview/applyResignation";
import ResignationStatus from "./myview/ResignationStatus";
import SubmittedResignation from "./otherview/submittedResignation";
import ApprovedByMe from "./otherview/approvedbyme";
import RejectedByMe from "./otherview/rejectedbyme";
import PageNotFound from "./otherview/pageNotFound";
import {ACCESS_TOKEN} from "./constants";
import {checkPermission} from "./utils/APIUtils";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            user: this.props.user
        };

    }

    logout = (redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") => {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({user: {}});
        window.location = '/';
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Header >
                        <Row theme='dark' type="flex" justify="start">
                            <Col align='left' span={8} ><img src='mo_logo_white.png' height='50px' width="290"/></Col>
                            <Col span={4} offset={12}>
                                <div>
                                    <Avatar style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }} size={60}>
                                        {this.state.user.name}
                                    </Avatar>
                                    <Button
                                        type="primary"
                                        icon="poweroff"
                                        size='small'
                                        style={{ marginLeft: 16, verticalAlign: 'middle' }}
                                        onClick={this.logout}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={210}>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className='option1'>
                                    <SubMenu
                                    key="sub1"
                                    disabled={!checkPermission(this.state.user, 'ROLE_EMPLOYEE')}
                                    title={
                                        <span>
                                        <Icon type="user"/>
                                        <span>My View ({this.state.user.name})</span>
                                    </span>
                                    }
                                >
                                    <Menu.Item key="3"><Link to="/">My Info</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/applyResignation">Resignation</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/resignationStatus">Resignation Status</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/resignationStatus">Exit Interview</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    disabled={!checkPermission(this.state.user, 'ROLE_MANAGER')}
                                    title={
                                        <span>
                                        <Icon type="team"/>
                                        <span>My Teams Resignation</span>
                                    </span>
                                    }
                                >
                                    <Menu.Item key="7"><Link to="/awaitingMe">Awaiting Approval</Link></Menu.Item>
                                    <Menu.Item key="8"><Link to="/approved">Approved Resignation</Link></Menu.Item>
                                    <Menu.Item key="9"><Link to="/rejected">Rejected Resignation</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    disabled={!(checkPermission(this.state.user, 'ROLE_HR') ||
                                        checkPermission(this.state.user, 'ROLE_ADMIN') ||
                                            checkPermission(this.state.user, 'ROLE_FINANCE'))
                                    }
                                    title={
                                        <span>
                                        <Icon type="team"/>
                                        <span>Department Approval</span>
                                    </span>
                                    }
                                >
                                    <Menu.Item key="10"><Link to="/awaitingMe">Awaiting Approval</Link></Menu.Item>
                                    <Menu.Item key="11"><Link to="/approved">Approved Resignation</Link></Menu.Item>
                                    <Menu.Item key="12"><Link to="/rejected">Rejected Resignation</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="13">
                                    <Icon type="file"/>
                                    <span>File</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{margin: '0 16px'}}>
                                <Breadcrumb style={{margin: '16px 0'}}>
                                    <Breadcrumb.Item>My View </Breadcrumb.Item>
                                    <Breadcrumb.Item>My Info</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{padding: 24, background: '#fff', height: '100%'}}>
                                    <Switch>
                                        <Route exact path="/" render={(props) =>(
                                            <UserInfo user={this.state.user}/>
                                        )}/>
                                        <Route exact path="/userinfo" render={(props) =>(
                                            <UserInfo user={this.state.user}/>
                                        )}/>
                                        <Route exact path="/applyResignation" render={(props) =>(
                                            <ApplyResignation user={this.state.user}/>
                                        )}/>
                                        <Route exact path="/applyResignation" render={(props) =>(
                                            <ResignationStatus user={this.state.user}/>
                                        )}/>
                                        <Route exact path="/resignationStatus" render={(props) =>(
                                            <ResignationStatus user={this.state.user}/>
                                        )}/>
                                        <Route exact path="/awaitingMe" render={(props) =>(
                                            <SubmittedResignation user={this.state.user}/>
                                        )}/>
                                        <Route exact path="/approved" render={(props) =>(
                                            <ApprovedByMe user={this.state.user}/>
                                        )}/>
                                        <Route exact path="/rejected" render={(props) =>(
                                            <RejectedByMe user={this.state.user}/>
                                        )}/>
                                        <Route component={PageNotFound}/>
                                    </Switch>
                                </div>
                            </Content>
                            <Footer style={{textAlign: 'center'}}>Mediaocean Employee Resignation Portal ©2019 Created by Terminator</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
