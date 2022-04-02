import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Box from '@material-ui/core/Box';


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

function TwoUnderstanding() {



    const dispatch = useDispatch();
    const scoreReducer = useSelector(store => store.scoreReducer)
    const history = useHistory();

    const [newUnderstanding, setNewUnderstanding] = useState(0);



    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newUnderstanding);

        if (newUnderstanding === 0) {
            alert('Please click a person who represents your level of understanding to continue!')
        } else {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: {
                    understanding: newUnderstanding
                }
            });
            history.push('/threeSupport');
        }
    }

    return (
        <div>
            <div>
                <h1>How well are you understanding the content?</h1>
            </div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    name="highlight-selected-only"
                    defaultValue={0}
                    IconContainerComponent={IconContainer}
                    highlightSelectedOnly
                    onChange={(event, newValue) => setNewUnderstanding(newValue)}
                />
            </Box>
            <button onClick={handleSubmit}>Next</button>

        </div>
    )
}


export default TwoUnderstanding;