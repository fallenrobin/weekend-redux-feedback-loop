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

    const handleSubmit = (event) => {
        console.log('clicked into handleSubmit!', newFeeling);
        // event.preventDefault();

        dispatch({
            type: 'ADD_FEELING',
            payload: {
                feeling: newFeeling
            }
        });

        history.push('/twoUnderstanding');
    }

    return (
        <div>
            <div>
                <h1>How are you feeling today?</h1>
            </div>
            <form>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name="customized-icons"
                        defaultValue={0}
                        value={newFeeling}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                        onChange={(event, newValue) => setNewFeeling(newValue)}
                    />
                </Box>
                {/* <input type="number" ></input> */}
                <button onClick={handleSubmit}>Next</button>
            </form>

        </div>
    )
}


export default OneFeeling;