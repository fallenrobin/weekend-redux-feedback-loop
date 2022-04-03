import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);


function Review() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.scoreReducer)

    const classes = useStyles();



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
                <p>Feedback: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments: {feedback.feeling}</p>
                <Button variant="contained" type="button"
                    onClick={() => history.push('/fourComments')}>Go Back</Button>
                <Button
                    variant="contained"
                    color="primary"
                    // id="sendBtn"
                    className={classes.button}
                    // endIcon={<Icon>send</Icon>}
                    onClick={handleSubmit}>Send Feedback</Button>

            </div>

        </>
    );
}


export default Review;