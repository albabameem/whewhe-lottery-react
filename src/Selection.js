import {useState} from 'react';

const Selection = (props) => {
    
    return (
        <div className="selection">
            <h2>Numbers Selected</h2>
        
            <ul className="selectList">

                <li id="totalList">Total: $<span></span></li>
            </ul>
        </div>
    )
}

export default Selection;