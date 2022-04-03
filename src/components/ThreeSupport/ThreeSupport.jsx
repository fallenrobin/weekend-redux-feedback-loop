import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             '& > *': {
//                 margin: theme.spacing(1),
//             },
//         },
//     }),
// );


const newLocal = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    width: newLocal,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

function valuetext(value) {
  return `${value}`;
}

function ThreeSupport() {

  const dispatch = useDispatch();
  const orderReducer = useSelector(store => store.scoreReducer)
  const history = useHistory();

  const [newSupport, setNewSupport] = useState(0);

  const handleSubmit = (event) => {
    console.log('clicked into handleSubmit!', newSupport);
    if (newSupport === 0) {
      alert('Please use the slider to select a number to continue!')
    } else {
      dispatch({
        type: 'ADD_SUPPORT',
        payload: {
          support: newSupport
        }
      });
      history.push('/fourComments');
    }
  }

  return (
    <div>
      <div>
        <h1>How well are you being supported?</h1>
      </div>

      <div >

        <Typography id="discrete-slider-custom" gutterBottom>
          How supported did you feel today?
        </Typography>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={0}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            onChange={(event, newValue) => setNewSupport(newValue)}
          />
        </Box>


      </div>
      <button type="button" onClick={() => history.push('/twoUnderstanding')}>Go Back</button>
      <Button variant="contained" color="primary"
        onClick={handleSubmit}>Next</Button>
    </div>
  )
}


export default ThreeSupport;