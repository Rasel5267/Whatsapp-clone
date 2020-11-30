import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './Chat.css';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
    const [input, setInput] = useState("");
    const sendMessage = () => {

    }
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <Avatar className="roomName"/>
                    <div className="chat__headerInfo">
                        <h3>Room Name</h3>
                        <p>Last seen at...</p>
                    </div>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                   <span className="chat__name">Rasel</span> 
                    This is a message
                    <span className="chat__timestamp">{new Date().toLocaleString({ timeZone: 'Asia/Dhaka' })}</span>
                </p>
                <p className="chat__message chat__receiver">
                   <span className="chat__name">Rasel</span> 
                    This is a message
                    <span className="chat__timestamp">{new Date().toLocaleString({ timeZone: 'Asia/Dhaka' })}</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form onSubmit={sendMessage}>
                    <input type="text" value={input} onchange={(e) => setInput(e.target.value)} placeholder="Type a message"/>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;