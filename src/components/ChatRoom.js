import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../constant';

function ChatRoom(props) {
    const [chatRoom, setChatRoom] = useState([]);
    const [comment, setComment] = useState("")

    useEffect(() => {
        if (localStorage.getItem('authentication') === null) {
          setComment("Please login first")
          
          }
        else {
          setComment("")
        }
      }, []);

    useEffect(() => {
    
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: baseUrl + 'chat/chatroom/',
        headers: {
            'Authorization': "token " + localStorage.getItem('authentication')
         }
        };

        axios.request(config)
        .then((response) => {
        setChatRoom(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }, [chatRoom]);

    return (
        <div>
            <h1>Chat Room</h1>
            <ul>
                {chatRoom.map((chatRooms) => (
                    <li key={chatRooms.id}>{chatRooms.name}</li>
                ))} 
            </ul>

            <p id="comment">{comment}</p>
        </div>
    );
}

export default ChatRoom;