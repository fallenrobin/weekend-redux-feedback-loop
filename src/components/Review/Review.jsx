import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon'; //was for 'send' icon in submit button; couldn't get to work right

import Typography from '@mui/material/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            minWidth: 275,//card
            maxWidth: 400,
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
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
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            // justify="center" //better without; this puts in very center of page
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={6}>

                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Final review
                        </Typography>

                        <Typography variant="h5" component="h2">
                            Here's what you said:
                        </Typography>

                        <p>Feeling: {feedback.feeling} of 5</p>
                        <p>Understanding: {feedback.understanding} of 5</p>
                        <p>Supported: {feedback.support} of 5</p>
                        <p>Comments: {feedback.comments}</p>
                    </CardContent>

                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" type="button"
                            onClick={() => history.push('/fourComments')}>Go Back</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            id="sendBtn"
                            className={classes.button}
                            // endIcon={<Icon>send</Icon>}
                            onClick={handleSubmit}>Send Feedback</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >

    );
}


export default Review;