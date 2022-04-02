import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function Submitted() {

    const history = useHistory();

    const handleSubmit = (event) => {
        console.log('clicked into Submitted!');

        history.push('/');
    }

        return (
            <>
                <div>
                    <h1>Thanks for your feedback!</h1>
                    
                    <button onClick={handleSubmit}>Leave new feedback</button>

                </div>

            </>
        )
    }



export default Submitted;