import {ACCESS_TOKEN, API_BASE_URL, API_RESIGN_URL, API_RESIGN_STATUS_URL} from '../constants';
import {notification} from "antd";
import _ from 'lodash'

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function checkPermission(user, permission) {
    let hasPermission = false;
    hasPermission = _.some(user.authorities, function (userPermission) {
        return userPermission.authority === permission;
    })

    return hasPermission;

}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}

export function submitResignation(resignationRequest) {
    return request({
        url: API_RESIGN_URL,
        method: 'POST',
        body: JSON.stringify(resignationRequest)
    });
}

export function checkResigned (user) {
    let resigned = false;
    if(user.status !== 'ACTIVE') {
        resigned = true;
    }
    console.log(resigned)
    return resigned;
}

export function getResignationForMgr() {
    return request({
        url: API_RESIGN_STATUS_URL + "/getresignationformgr",
        method: 'GET'
    });
}

export function getResignationForHr() {
    return request({
        url: API_RESIGN_STATUS_URL + "/getresignationforhr",
        method: 'GET'
    });
}

export function getResignationForAdmin() {
    return request({
        url: API_RESIGN_STATUS_URL + "/getResignationforadmin",
        method: 'GET'
    });
}

export function getResignationForFinance() {
    return request({
        url: API_RESIGN_STATUS_URL + "/getResignationforfinance",
        method: 'GET'
    });
}




export function getSubmittedResign(empId) {
    return request({
        url: API_RESIGN_URL + "/" + empId,
        method: 'GET'
    });
}

export function updateStatus(empId) {
    return request({
        url: API_RESIGN_URL + "/updatestatus?employeeId=" + empId + "&status=WITHDRAW",
        method: 'GET'
    });
}


export const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
    });
}
