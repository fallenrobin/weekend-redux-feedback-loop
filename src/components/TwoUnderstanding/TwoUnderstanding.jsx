import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function TwoUnderstanding() {

    const dispatch = useDispatch();
    const scoreReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newUnderstanding, setNewUnderstanding] = useState(0);

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newUnderstanding);
        event.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: {
                understanding: newUnderstanding
            }
        });

        history.push('/threeSupport');
    }

    return (
        <div>
            <div>
                <h1>How well are you understanding the content?</h1>
            </div>
            <form>
                <input type="number" onChange={event => setNewUnderstanding(event.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}


export default TwoUnderstanding;