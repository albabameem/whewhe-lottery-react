import {useState} from 'react';

const Main = (props) => {
    
    const clear = () =>{
        window.location.reload(false);
    }

    const cash = () =>{
        document.querySelector('#totalValue > span').innerText = localStorage.getItem('total');
        document.querySelector('.modal').classList.add('show');
    }
    
    const addNumbers = (e) => {
        
        if(e.target.classList.contains("selectedNumber")){
            e.target.classList.remove("selectedNumber");
            let index = props.selectedNumbersArray.indexOf(e.target.value);
            props.selectedNumbersArray.splice(index, 1);
            document.querySelector('li[value="'+e.target.value+'"]').remove();
        }else{
            if(props.selectedNumbersArray.length >= 5){
                alert('Maximum numbers used.');
                return;
            }
            e.target.classList.add("selectedNumber");
            props.selectedNumbersArray.push(e.target.value);
            let li = document.createElement("li");
            li.setAttribute('value', e.target.value);
            li.innerHTML = 'Mark: '+e.target.value;
            document.querySelector('ul.selectList').prepend(li);
        }
        
    }

    
    const numberHtml = props.numbersArray.map((item) =>
        <button value={item} className="numberButton" onClick={addNumbers}>{item}</button>
    );
    return (
        <div className="main">
            <div className="flex-box">
            {numberHtml}
            <button id="cashButton" onClick={cash}>Cash</button>
            <button id="clearButton" onClick={clear}>Clear</button>
            </div>
        </div>
    )
}

export default Main;