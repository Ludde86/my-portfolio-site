import React, { useState } from 'react';
import "./webdesign1.css";
import Navbar from "./navbar/Navbar"
import Main from "./main/Main"
import MyButton from "./buttons/MyButton"
import UserCard from "./usercard/UserCard"
import ListUser from "./userData/UserData"
import TicTacToe from "./tictactoe/TicTacToe"

const Webdesign1 = () => {

    const [status, setStatus] = useState(false);

    function handleSetStatus() {
        if (status === true) {

            setStatus(false)
        }
        if (status === false) {

            setStatus(true)
        }

    }

    return (
        <div className='web-container'>

            <Navbar />
            <Main />
            <UserCard status={status} onClick={handleSetStatus} />

            <MyButton />
            <MyButton />

            {ListUser()}



        </div>
    );

}

export default Webdesign1;