import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function Review() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.scoreReducer)

    const handleSubmit = (event) => {
        console.log('clicked into reviewSubmit!');


        // need axios POST on click
        axios.post('/feedback', feedback)
            .then(response => {
                history.push('/submitted');
            })
            .catch(error => {
                console.log('error in post', error);
                alert('There was a problem submitting your feedback 😿')
            });
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