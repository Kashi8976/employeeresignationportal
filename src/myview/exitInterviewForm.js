import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
const { TextArea } = Input;

var FeedbackForm=() =>{
    const [question, setQuestion] = useState(null);
    useEffect(async() => {
        const response =await fetch("http://localhost:8080/submitform");
        const data =await response.json();
        const [item] = data.results; 
        setQuestion(item);
    }, [question]);
    
    return (
      <form action="" method="post">
        <label >{question}</label>
        <br />
        <TextArea id={'Answer'} />
        <br />
        <Button type="submit">Send it!</Button>
      </form>
    )
  }

  export default FeedbackForm;