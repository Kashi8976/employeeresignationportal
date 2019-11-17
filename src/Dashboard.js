import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Breadcrumb, Icon, Layout, Menu} from "antd";
import UserInfo from "./myview/userInfo";
import ApplyResignation from "./myview/applyResignation";
import ResignationStatus from "./myview/ResignationStatus";
import SubmittedResignation from "./otherview/submittedResignation";
import ApprovedByMe from "./otherview/approvedbyme";
import RejectedByMe from "./otherview/rejectedbyme";
import PageNotFound from "./otherview/pageNotFound";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class Dashboard extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={210}>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className='option1'>
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                        <Icon type="user"/>
                                        <span>My View</span>
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
                                    <Breadcrumb.Item>My View</Breadcrumb.Item>
                                    <Breadcrumb.Item>My Info</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{padding: 24, background: '#fff', height: '100%'}}>
                                    <Switch>
                                        <Route exact path="/" component={UserInfo}/>
                                        <Route exact path="/userinfo" component={UserInfo}/>
                                        <Route exact path="/applyResignation" component={ApplyResignation}/>
                                        <Route exact path="/resignationStatus" component={ResignationStatus}/>
                                        <Route exact path="/awaitingMe" component={SubmittedResignation}/>
                                        <Route exact path="/approved" component={ApprovedByMe}/>
                                        <Route exact path="/rejected" component={RejectedByMe}/>
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
