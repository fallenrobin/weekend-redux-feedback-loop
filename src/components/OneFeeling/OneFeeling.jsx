import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function OneFeeling(params) {

    const dispatch = useDispatch();
    const orderReducer = useSelector(store => store.orderReducer)
    const history = useHistory();

    const [newFeeling, setNewFeeling] = useState(0);

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newFeeling);
        event.preventDefault();

        // history.push('/'); NEED TO DO

        dispatch({
            type: 'ADD_FEELING',
            payload: {
                feeling : newFeeling
            }
        });
    }

    return (
        <div>
            <div>
                <h1>How are you feeling today?</h1>
            </div>
            <form>
                <input type="number" onChange={event => setNewFeeling(event.target.value)}></input> 
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}


export default OneFeeling;