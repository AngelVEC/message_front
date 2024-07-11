import React, { useEffect, useState } from 'react';
import { baseUrl } from '../constant';
import axios from 'axios';

function NumberSumUp(props) {
    const [startNum, setStartNum] = useState(0)
    const [endNum, setEndNum] = useState(0)    
    const [result, setResult] = useState(0)
    const [comment, setComment] = useState("")

    useEffect(() => {
        if (localStorage.getItem('authentication') === null) {
          setComment("Please login first")
          
          }
        else {
          setComment("")
        }
      }, []);
    function start_num_handler(e){
        setStartNum(e.target.value)
    }

    function end_num_handler(e){
        setEndNum(e.target.value)
    }

    function cal() 
    {
        let data = {
            "start_num": Number(startNum),
            "end_num": Number(endNum)
          };
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl + 'chat/sum_numbers/',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': "token " + localStorage.getItem('authentication')
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            setResult(response.data.result)
            console.log(JSON.stringify(response.data.result));
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <p>Start Number: <input type={"number"} id={"startNum"} onChange={start_num_handler}/> </p>
            <p>End Number: <input type={"number"} id={"endNum"} onChange={end_num_handler}/> </p>
            <button id={"calculate"} onClick= {cal}> Calculate </button>
            <p>Result = <span id="result">{result}</span></p>
            <p id="comment">{comment}</p>
        </div>
    );
}

export default NumberSumUp;