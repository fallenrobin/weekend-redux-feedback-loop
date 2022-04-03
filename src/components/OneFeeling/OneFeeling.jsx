import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//start card stuff
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//grid for centering
import Grid from '@material-ui/core/Grid';

//card centering resource: https://stackoverflow.com/questions/53183297/material-ui-card-will-not-center-react-js



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            minWidth: 275,//card
            maxWidth: 400,
        },
        // root: {
        //     minWidth: 275,
        //   },
        //below is for card
        // bullet: {
        //     display: 'inline-block',
        //     margin: '0 2px',
        //     transform: 'scale(0.8)',
        // },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    }),
);

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: '1',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: '2',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: '3',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: '4',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
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

function OneFeeling(params) {

    const dispatch = useDispatch();
    const scoreReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newFeeling, setNewFeeling] = useState(0);

    // for card
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>; //not using bullets rn
    //end card

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newFeeling);
        // event.preventDefault(); not needed
        if (newFeeling === 0) {
            alert('Please look in a mirror and then click the face that best matches yours to continue!')
        } else {
            dispatch({
                type: 'ADD_FEELING',
                payload: {
                    feeling: newFeeling
                }
            });

            history.push('/twoUnderstanding');
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
                            1 of 4
                        </Typography>

                        <Typography variant="h5" component="h2">
                            How are your feels today?
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            pick a face
                        </Typography>

                        <Rating
                            name="customized-icons"
                            defaultValue={0}
                            value={newFeeling}
                            getLabelText={(value) => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                            onChange={(event, newValue) => setNewFeeling(newValue)}
                        />
                    </CardContent>

                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="contained" color="primary"
                            onClick={handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >
    )
}


export default OneFeeling;