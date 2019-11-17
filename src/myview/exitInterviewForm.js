import React, { useEffect, useState } from 'react';
import {Input, Button} from 'antd';
import { fetchFromUri, postBodyToUri } from '../utils/APIUtils';
const Textarea = Input;

var FeedbackForm=({questionID=1}) =>{
    const [question, setQuestion] = useState(null);
    // useEffect(async() => {
    //     const response =await fetch("http://localhost:8080/submitform");
    //     const data = response.json();
    //     const [item] = data.results; 
    //     setQuestion(item);
    // }, [question]);
    


    useEffect( ()=>{
        fetchFromUri("http://dummy.restapiexample.com/api/v1/employees").then(response => {setQuestion(response);
    console.log(response)});
    },[]);

    const getQuestion= () =>{
        if(question!=null){
            return question[0].employee_name;
        }
    } 

    const sendData = () => {
      let body = {};
      body.userID=1;
      body.Answer= document.getElementById('Answer1').value;
      body.question= getQuestion;

      postBodyToUri('https://postman-echo.com/post',body);
    }
    
    /**
     * 
     */


    return (
      <form action="" method="post">
        <label>{getQuestion}</label>
        <br />
        <Textarea id={'Answer1'} />
        <br />
        <Button type="submit" onClick={sendData} >Send it!</Button>
      </form>
    )
  }

  export default FeedbackForm;