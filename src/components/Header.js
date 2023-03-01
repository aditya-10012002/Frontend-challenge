import React, { useState } from 'react'
import './Header.css';

const Header = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const printData = event => {
        event.preventDefault();
        // console.log(enteredValue);
        props.onFetch(enteredValue);
        setEnteredValue('');
    }

    const updateInputHandler = (event) => {
        // console.log(event.target.value);
        setEnteredValue(event.target.value)
    }

    return (
        <div className='header'>
            <form onSubmit={printData}>
                <input
                    type="text"
                    name="search"
                    placeholder='Search Book By Titles or By Author'
                    value={enteredValue}
                    onChange={updateInputHandler}
                />
            </form>
        </div>
    )
}

export default Header