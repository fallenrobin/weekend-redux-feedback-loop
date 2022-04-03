import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import Typography from '@mui/material/Typography';
// import Slider from '@material-ui/core/Slider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

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
      alert('Please enter your level of supportnacity to continue!')
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

        {/* <Typography id="discrete-slider-custom" gutterBottom>
          Pick 1 through 5
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
        </Box> */}
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="customized-icons"
            defaultValue={0}
            value={newSupport}
            getLabelText={(value) => customIcons[value].label}
            IconContainerComponent={IconContainer}
            onChange={(event, newValue) => setNewSupport(newValue)}
          />
        </Box>


      </div>
      <Button variant="contained" type="button"
        onClick={() => history.push('/twoUnderstanding')}>Go Back</Button>
      <Button variant="contained" color="primary"
        onClick={handleSubmit}>Next</Button>
    </div>
  )
}


export default ThreeSupport;