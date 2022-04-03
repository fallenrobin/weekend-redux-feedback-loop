import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


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

                <Button variant="contained" color="primary"
                    onClick={handleSubmit}>Back to the Beginning</Button>

            </div>

        </>
    )
}



export default Submitted;