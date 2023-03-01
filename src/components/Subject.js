import React, { useState } from 'react';
import './Subject.css';
import Trending from './Trending';

const Subject = props => {

    const [enteredSubject, setEnteredSubject] = useState('');

    const printData = event => {
        event.preventDefault();
        // console.log(enteredSubject);
        props.onFetch(enteredSubject);
        // setEnteredSubject('');
    }

    const fetchSubject = subject => {
        setEnteredSubject(subject);
        props.onFetch(subject);
    }

    const updateInputHandler = (event) => {
        // console.log(event.target.value);
        setEnteredSubject(event.target.value)
    }

    return (
        <div className='margin'>
            <h2>Trending Subjects</h2>
            <form onSubmit={printData}>
                <input
                    type="text"
                    name="subject"
                    placeholder="Search Subjects"
                    value={enteredSubject}
                    onChange={updateInputHandler}
                />
            </form>
            {/* <Trending onFetch={props.onFetch} /> */}
            <div className='trending'>
                <ul>
                    <li key={Math.random()}><button onClick={() => {fetchSubject('Javascript')}}>Javascript</button></li>
                    <li key={Math.random()}><button onClick={() => {fetchSubject('Harry Potter')}}>Harry Potter</button></li>
                    <li key={Math.random()}><button onClick={() => {fetchSubject('Indian History')}}>Indian History</button></li>
                    <li key={Math.random()}><button onClick={() => {fetchSubject('Crypto currency')}}>Crypto currency</button></li>
                    <li key={Math.random()}><button onClick={() => {fetchSubject('Criminal law')}}>Criminal Law</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Subject;