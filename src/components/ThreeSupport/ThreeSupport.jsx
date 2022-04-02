import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


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
        // event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: {
                support : newSupport
            }
        });

        history.push('/fourComments');
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
                {/* <input type="number" ></input>  */}
                <button onClick={handleSubmit}>Next</button>
        </div>
    )
}


export default ThreeSupport;