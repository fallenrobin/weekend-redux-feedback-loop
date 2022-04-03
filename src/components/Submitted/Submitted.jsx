import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//MUI for card
import Typography from '@mui/material/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';

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

function Submitted() {

    const history = useHistory();
    const classes = useStyles(); //for card


    const handleSubmit = (event) => {
        console.log('clicked into Submitted!');

        history.push('/');//starts over at 'Home' that has OneFeeling
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

                        <Typography variant="h5" component="h2">
                            Thanks for your feedback!
                        </Typography>

                    </CardContent>

                    <CardActions style={{ justifyContent: 'center' }}> {/* centers button*/}
                        <Button variant="contained" color="primary"
                            onClick={handleSubmit}>Back to the Beginning</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >
    )
}



export default Submitted;