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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            minWidth: 275,//card
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

    //card
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>; //not needed for me
    //end card

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newFeeling);
        // event.preventDefault();
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
        // <div className="feedbackBox">
        //     <div>
        //         <h1>How are you feeling today?</h1>
        //     </div>
        //     <form>
        //         <Box component="fieldset" mb={3} borderColor="transparent">
        //             <Rating
        //                 name="customized-icons"
        //                 defaultValue={0}
        //                 value={newFeeling}
        //                 getLabelText={(value) => customIcons[value].label}
        //                 IconContainerComponent={IconContainer}
        //                 onChange={(event, newValue) => setNewFeeling(newValue)}
        //             />
        //         </Box>
        //         <Button variant="contained" color="primary"
        //             onClick={handleSubmit}>Next</Button>
        //     </form>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        1 of 4
                    </Typography>
                    <Typography variant="h5" component="h2">
                    How are you feeling today?
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        pick a face
                    </Typography>
                    {/* <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}
                    <Rating
                        name="customized-icons"
                        defaultValue={0}
                        value={newFeeling}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                        onChange={(event, newValue) => setNewFeeling(newValue)}
                    />
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary"
                    onClick={handleSubmit}>Next</Button>
                </CardActions>
            </Card>

    )
}


export default OneFeeling;