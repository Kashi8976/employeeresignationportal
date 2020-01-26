import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './slider.css';
import {Form} from 'antd';
import Login from "./authentication/login";
import Dashboard from "./Dashboard";
import {ACCESS_TOKEN, USER_DATA} from "./constants";

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(Login);

class HrDashboard extends React.Component {
    state = {
        collapsed: false,
        user: {}
    };

    componentDidMount() {
        // localStorage.removeItem(ACCESS_TOKEN);
        if (localStorage.getItem(USER_DATA).accessToken) {
            let user = localStorage.getItem(USER_DATA).authentication.principal;
            user.roles = localStorage.getItem(USER_DATA).roles;
            this.setState({user: user});
        } else {
            this.setState({user: {}});
        }
    }
    callback(userPrincipal) {
        this.setState({user: userPrincipal});
    }

    render() {
        return (
            <div>
                {this.state.user && this.state.user.mail ? <Dashboard user={this.state.user}/> :
                    <WrappedNormalLoginForm callback={this.callback.bind(this)}/>}
            </div>
        );
    }
}

ReactDOM.render(<HrDashboard/>, document.getElementById("root"));
