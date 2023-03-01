import React from 'react'
import './Card.css';

const Card = props => {
    const searchList = props.searchList;
    const offset = props.offset;
    const maxOffset = props.maxOffset;
    const setOffset = props.setOffset;
    // const setOffset = props.setOffset;

    const increaseOffsetHandler = () => {
        if(searchList.length !== 0)
        setOffset(prevValue => prevValue + 10);
        // console.log("Increased value - " + offset);
    }

    const decreaseOffsetHandler = () => {
        setOffset(prevValue => prevValue - 10);
        // console.log("Decreased value - " + offset);
    }

    // console.log(searchList);
    return (
        <div className='search__table'>
            <table>
                <thead>
                    <tr>
                        <th>Title and Sub Title</th>
                        <th>Author</th>
                        <th>Latest Publish Year</th>
                        <th>First Publish Year</th>
                    </tr>
                </thead>
                <tbody>
                    {props.searchList.map(element =>
                        <tr key={Math.random()}>
                            <td>{element['Title']}</td>
                            <td>{element['Author']}</td>
                            <td>{element['Latest_publish_year']}</td>
                            <td>{element['First_publish_year']}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='navigation'>
                <button disabled={offset === 0 ? true : false} onClick={decreaseOffsetHandler}>Prev</button>
                <button disabled={offset+10 > maxOffset ? true : false} onClick={increaseOffsetHandler}>Next</button>
            </div>
        </div>
    )
}

export default Card