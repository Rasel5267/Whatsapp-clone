import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__body">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};

export default Home;