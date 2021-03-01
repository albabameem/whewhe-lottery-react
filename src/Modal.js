
const Modal = () => {

    const close = () =>{
        document.querySelector('.modal').classList.remove('show');
    }

    const receive = (e) => {
        let received = e.target.value;
        
        let change = parseInt(received) - parseInt(localStorage.getItem('total'));
        document.querySelector('input#change').value = change;
    }

    return (
        <div className="modal">
            <form>
                <div id="totalValue">Total: $<span></span></div>
                Received <input type="text" onKeyUp={receive}/><br />
                Change <input type="text" id="change" readonly /><br />
                <button onClick={close}>Close</button>
            </form>
        </div>
    )
}

export default Modal;