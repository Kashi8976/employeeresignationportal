import React, { useEffect, useState } from 'react';
import {Input, Button} from 'antd';
import { fetchFromUri, postBodyToUri } from '../utils/APIUtils';
import { any } from 'prop-types';
import { ACCESS_TOKEN } from '../constants';
const Textarea = Input;

var FeedbackForm=({questionID=1}) =>{
    const [question, setQuestion] = useState(null);
    useEffect( ()=>{
        fetchFromUri("http://10.14.5.108:8082/question").then(response => {setQuestion(response);
         //console.log('Response',response); 
       });
    },[]);

    const getQuestion= () =>{
        if(question!=null){
         return question;
        }
    } 

    const sendData = () => {
      let body = {};
      body.userID=1;
      body.Answer= document.getElementById('Answer1').value;
      console.log('Body', body);
      postBodyToUri('https://postman-echo.com/post',body);
    }
    
    const queAnswerForm = (que) => {
      if(que === null){
        return <div></div>;
      }else {
        return que.map((text, index)=> (
          <div key={'div'+index}>
            <label >{text.question}</label>
            <Textarea key={'ans'+index} id={'Answer' + index} />
            <br />
            <br />
          </div>
        ));
      }
    }

    // useEffect(()=> {

    // }, [question]);
    


    return (
      <form action="" method="post">       
            <div>{queAnswerForm(question)}</div>
            
        <Button type="submit" onClick={sendData} >Send it!</Button>
      </form>
    )
  }

  export default FeedbackForm;