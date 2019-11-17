import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import './slider.css';
import {Form} from 'antd';
import Login from "./authentication/login";
import Dashboard from "./Dashboard";
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

class HrDashboard extends React.Component {
    state = {
        collapsed: false,
    };
    render() {
        return (
            <Router>
                <Switch>
                    {/*<Route exact to="/login" component={WrappedNormalLoginForm}/>*/}
                    {/*<Route exact to="/" component={Dashboard}/>*/}
                    <Dashboard></Dashboard>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<HrDashboard/>, document.getElementById("root"));
