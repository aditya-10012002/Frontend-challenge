import React from 'react'
import './Trending.css';

const Trending = props => {

    const fetchSubject = subject => {
        // props.onFetch(subject);
    }
    return (
        <div className='trending'>
            <ul>
                <li key={Math.random()}><button onClick={fetchSubject('Javascript')}>Javascript</button></li>
                <li key={Math.random()}><button onClick={fetchSubject('Harry Potter')}>Harry Potter</button></li>
                <li key={Math.random()}><button onClick={fetchSubject('Indian History')}>Indian History</button></li>
                <li key={Math.random()}><button onClick={fetchSubject('Crypto currency')}>Crypto currency</button></li>
                <li key={Math.random()}><button onClick={fetchSubject('Criminal law')}>Criminal Law</button></li>
            </ul>
        </div>
    )
}

export default Trending