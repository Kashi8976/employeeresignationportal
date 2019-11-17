import { API_BASE_URL, ACCESS_TOKEN, API_RESIGN_URL } from '../constants';
import {notification} from "antd";


const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response =>
        response.json().then(json => {
            if(!response.ok) {
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
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
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


export function getSubmittedResign(empId) {
    return request({
        url: API_RESIGN_URL + "/"+empId,
        method: 'GET'
    });
}

export function updateStatus(empId) {
    return request({
        url: API_RESIGN_URL + "/updatestatus?employeeId="+empId+"&status=WITHDRAW",
        method: 'GET'
    });
}



export const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
    });
}


export function fetchFromUri(uri) {
    return request({
        url: uri,
        method: 'GET'
    });
}

export function postBodyToUri(uri,requestBody){
    return request({
        url:uri,
        body: JSON.stringify(requestBody),
        method:'POST',  
    });
}   