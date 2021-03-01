import {useState} from 'react';
import lottery from './lottery.png';

const Sidebar = (props) => {
    const setTotal = (e) => {
        let currentValue = parseInt(localStorage.getItem("total"));
        let newValue = currentValue + parseInt(e.target.value);
        localStorage.setItem("total",newValue);
        document.querySelector('li#totalList > span').innerText = newValue;
    }

    return (
        <div className="sidebar">
            <img src={lottery}/>

            <div className="flex-box">
                <button value="1" className="moneyValue" onClick={setTotal}>$1</button>
                <button value="5" className="moneyValue" onClick={setTotal}>$5</button>
                <button value="10" className="moneyValue" onClick={setTotal}>$10</button>
                <button value="20" className="moneyValue" onClick={setTotal}>$20</button>
            </div>
        </div>
    )
}

export default Sidebar;