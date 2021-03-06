import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//MUI for icon rating
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//start specific MUI card content
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//grid for centering card
import Grid from '@material-ui/core/Grid';



const customIcons = {
    1: {
        icon: <ChildFriendlyIcon />,
        label: '1',
    },
    2: {
        icon: <EscalatorWarningIcon />,
        label: '2',
    },
    3: {
        icon: <DirectionsWalkIcon />,
        label: '3',
    },
    4: {
        icon: <DirectionsRunIcon />,
        label: '4',
    },
    5: {
        icon: <DirectionsBikeIcon />,
        label: '5',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

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

function TwoUnderstanding() {



    const dispatch = useDispatch();
    const scoreReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newUnderstanding, setNewUnderstanding] = useState(0);

    const classes = useStyles(); //for card



    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newUnderstanding);
        if (newUnderstanding === 0) {
            alert('Reflect on your mental grasp of the content, and place yourself on a scale of Incompetent-Baby to Velodrome-Racer to continue!')
        } else {
            dispatch({ //sending the selected understanding rating to reducer
                type: 'ADD_UNDERSTANDING',
                payload: {
                    understanding: newUnderstanding
                }
            });
            history.push('/threeSupport'); //pushing to next form
        }
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
                            2 of 4
                        </Typography>

                        <Typography variant="h5" component="h2">
                            How well are you understanding all this stuff today?
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            pick how cognitively evolved you feel
                        </Typography>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={0}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={(event, newValue) => setNewUnderstanding(newValue)}
                        />
                    </CardContent>

                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" type="button" onClick={() => history.push('/')}>Go Back</Button>
                        <Button variant="contained" color="primary" type="button"
                            onClick={handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >
    )
}


export default TwoUnderstanding;