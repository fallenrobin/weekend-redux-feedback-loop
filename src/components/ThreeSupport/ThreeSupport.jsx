import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function ThreeSupport() {

    const dispatch = useDispatch();
    const orderReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newSupport, setNewSupport] = useState(0);

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newSupport);
        event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: {
                support : newSupport
            }
        });

        history.push('/fourComments');
    }

    return (
        <div>
            <div>
                <h1>How well are you being supported?</h1>
            </div>
            <form>
                <input type="number" onChange={event => setNewSupport(event.target.value)}></input> 
                <button onClick={handleSubmit}>Next</button>
            </form>

        </div>
    )
}


export default ThreeSupport;