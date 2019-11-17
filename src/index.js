import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './slider.css';
import {Form} from 'antd';
import Login from "./authentication/login";
import Dashboard from "./Dashboard";
import {ACCESS_TOKEN} from "./constants";
import {getCurrentUser, openNotificationWithIcon} from "./utils/APIUtils";

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(Login);

class HrDashboard extends React.Component {
    state = {
        collapsed: false,
        user: {}
    };

    componentDidMount() {
       // localStorage.removeItem(ACCESS_TOKEN);
        if (localStorage.getItem(ACCESS_TOKEN)) {
            getCurrentUser().then(response => {
                this.setState({user: response});
            }).catch(error => {
                openNotificationWithIcon('error', 'Failed to Fetch User', '');
            });
        } else {
            this.setState({user: {}});
        }
    }

    render() {
        return (
            <div>
                {/* {this.state.user && this.state.user.id ? <Dashboard user={this.state.user}/> : <WrappedNormalLoginForm/>} */}
                <Dashboard user={'Prakash'}/>
            </div>
        );
    }
}

ReactDOM.render(<HrDashboard/>, document.getElementById("root"));
