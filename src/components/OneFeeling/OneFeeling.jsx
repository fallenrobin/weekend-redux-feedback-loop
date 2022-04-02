import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function OneFeeling(params) {

    const dispatch = useDispatch();
    const scoreReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newFeeling, setNewFeeling] = useState(0);

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newFeeling);
        event.preventDefault();

        dispatch({
            type: 'ADD_FEELING',
            payload: {
                feeling : newFeeling
            }
        });

        history.push('/twoUnderstanding'); 
    }

    return (
        <div>
            <div>
                <h1>How are you feeling today?</h1>
            </div>
            <form>
                <input type="number" onChange={event => setNewFeeling(event.target.value)}></input> 
                <Button variant="raised" color="primary" 
                onClick={handleSubmit}>Submit</Button>
            </form>

        </div>
    )
}


export default OneFeeling;