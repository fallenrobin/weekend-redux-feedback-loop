import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function FourComments() {

    const dispatch = useDispatch();
    const orderReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newComment, setNewComment] = useState('');

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newComment);
        event.preventDefault();

        history.push('/review'); 

        dispatch({
            type: 'ADD_COMMENT',
            payload: {
                comments : newComment
            }
        });
    }

    return (
        <div>
            <div>
                <h1>Any comments you want to leave?</h1>
            </div>
            <form>
                <input type="text" onChange={event => setNewComment(event.target.value)}></input> 
                <button onClick={handleSubmit}>Continue to review</button>
            </form>

        </div>
    )
}


export default FourComments;