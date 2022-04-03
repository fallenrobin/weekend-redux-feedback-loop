import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import Typography from '@mui/material/Typography';
// import Slider from '@material-ui/core/Slider';// Replaced this with icons
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
// import Alert from '@material-ui/lab/Alert'; Hm couldn't get to pop up..? Revisit later. (removed rest of that code)

//start specific MUI card content
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';

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
    icon: <VolunteerActivismOutlinedIcon />,
    label: '1',
  },
  2: {
    icon: <VolunteerActivismOutlinedIcon />,
    label: '2',
  },
  3: {
    icon: <VolunteerActivismOutlinedIcon />,
    label: '3',
  },
  4: {
    icon: <VolunteerActivismOutlinedIcon />,
    label: '4',
  },
  5: {
    icon: <VolunteerActivismOutlinedIcon />,
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


// old useStyles, for slider bar
//const newLocal = 200;
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: newLocal,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

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

//old, for slider
// const marks = [
//   {
//     value: 1,
//     label: '1',
//   },
//   {
//     value: 2,
//     label: '2',
//   },
//   {
//     value: 3,
//     label: '3',
//   },
//   {
//     value: 4,
//     label: '4',
//   },
//   {
//     value: 5,
//     label: '5',
//   },
// ];

// function valuetext(value) {
//   return `${value}`;
// }

function ThreeSupport() {

  const dispatch = useDispatch();
  const orderReducer = useSelector(store => store.scoreReducer)
  const history = useHistory();

  const classes = useStyles(); //for card


  const [newSupport, setNewSupport] = useState(0);

  const handleSubmit = (event) => {
    console.log('clicked into handleSubmit!', newSupport);
    if (newSupport === 0) {
      alert('Please enter your level of supportnacity to continue!')
    } else { //sending the selected support rating to reducer
      dispatch({
        type: 'ADD_SUPPORT',
        payload: {
          support: newSupport
        }
      });
      history.push('/fourComments'); //pushing to next form
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
              3 of 4
            </Typography>

            <Typography variant="h5" component="h2">
              Feeling supported today, or not so much?
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              How many hearthands supported you?
            </Typography>

            <Rating
              name="customized-icons"
              defaultValue={0}
              value={newSupport}
              getLabelText={(value) => customIcons[value].label}
              IconContainerComponent={IconContainer}
              onChange={(event, newValue) => setNewSupport(newValue)}
            />
          </CardContent>

          <CardActions style={{justifyContent: 'center'}}>
            <Button variant="contained" type="button"
              onClick={() => history.push('/twoUnderstanding')}>Go Back</Button>
            <Button variant="contained" color="primary"
              onClick={handleSubmit}>Next</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid >
  )
}


export default ThreeSupport;