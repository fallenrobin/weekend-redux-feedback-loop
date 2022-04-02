import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function Review() {

    const dispatch = useDispatch();
    const scoreReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const handleSubmit = (event) => {
        console.log('clicked into reviewSubmit!');

       //need axios POST
       //then fetch? No

        history.push('/done');  
    }


    return (
        <>
            <div>
                <h1>Review your feedback</h1>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <button onClick={handleSubmit}>Submit</button>

            </div>

        </>
    )
}


export default Review;