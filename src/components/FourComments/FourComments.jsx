import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

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
                comments: newComment
            }
        });
    }

    return (
        <div>
            <div>
                <h1>Any comments you want to leave?</h1>
            </div>

            <form>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Enter a comment (optional)"
                    style={{ width: 400 }}
                    minRows={3}
                    onChange={event => setNewComment(event.target.value)}
                />

            </form>
            <Button variant="contained" type="button"
                onClick={() => history.push('/threeSupport')}>Go Back</Button>
            <Button variant="contained" color="primary"
                onClick={handleSubmit}>Continue to review</Button>
        </div>
    )
}


export default FourComments;