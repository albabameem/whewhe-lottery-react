import {useState} from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Selection from './Selection';

const Content = () => {
    const selectedNumbers = [];
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    localStorage.setItem("total",0);
    return (
        <div className="content">
            <Sidebar />
            <Main selectedNumbersArray={selectedNumbers} numbersArray={numbers} />
            <Selection selectedNumbersArray={selectedNumbers} />
        </div>
    )
}

export default Content;