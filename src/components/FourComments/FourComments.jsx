import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

function FourComments() {

    const dispatch = useDispatch();
    const orderReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newComment, setNewComment] = useState('');

    const classes = useStyles(); //for card


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
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            // justify="center" //better without; this puts in very center of page
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={12}>

                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            4 of 4
                        </Typography>

                        <Typography variant="h5" component="h2">
                            What do you have to say for yourself??
                        </Typography>

                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Speak up! (But like, no pressure)"
                            style={{ width: 300 }} //how to make it stay within card width??
                            minRows={3}
                            onChange={event => setNewComment(event.target.value)}
                        />
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" type="button"
                            onClick={() => history.push('/threeSupport')}>Go Back</Button>
                        <Button variant="contained" color="primary"
                            onClick={handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >

    )
}


export default FourComments;