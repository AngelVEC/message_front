import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../constant";

function CreateChatroom(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: baseUrl + 'chat/users/',
            headers: {
                'Authorization': 'token dd542e46bc61deab8fc126c3114eda7cf0dcfdc4'
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [users]);

    function createChatroom() {
        let name = document.getElementById('name').value;
        let created_by = document.getElementById('created_by').value;
        let members = document.getElementById('members').selectedOptions;
        members = Array.from(members).map((member) => {
            return Number.parseInt(member.value) || member.value
        });
        console.log(members);
        let data = {
            "name": name,
            "created_by": Number.parseInt(created_by) || created_by,
            "members": members
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl + 'chat/chatroom/',
            headers: {
                'Authorization': 'token dd542e46bc61deab8fc126c3114eda7cf0dcfdc4',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Create Chatroom</h1>
            <p>Name: <input id={'name'} type={'text'}/></p>
            <p>Created By: <select id="created_by">
                {users.map((user) => {
                    return <option key={user.id} value={user.id}>{user.username}</option>
                })}
            </select></p>
            <p>Members: <select id="members" multiple="multiple">
                {users.map((user) => {
                    return <option key={user.id} value={user.id}>{user.username}</option>
                })}
            </select></p>
            <p>
                <button onClick={createChatroom}>Create</button>
            </p>
        </div>
    );
}

export default CreateChatroom;