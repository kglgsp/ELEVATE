import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import movers from '../../assets/img/movers.jpg';
import tutor from '../../assets/img/tutor.jpg';
import pizza from '../../assets/img/pizza.jpg';
import mower from '../../assets/img/mower.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { SearchBar } from '../SearchBar/SearchBar';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
{
  "id": 1,
  "img": tutor,
  "jobTitle": "Math Tutor" ,
  "jobPay": "15", 
  "jobDesc": "Assist student with homework, teaching them how to perform the calculations needed to complete their assignments.",
  "location": "New York, CA 34234"
}, 
{
  "id": 2,
  "img": mower,
  "jobTitle": "Gardening Project" ,
  "jobPay": "23", 
  "jobDesc": "Mow, trim, and fertilize green spaces. Maintain all gardening equipment and machinery, like mowers, trimmers and leaf blowers.",
  "location": "San Diego, CA 95663"
}, 
{
  "id": 3,
  "img": pizza,
  "jobTitle": "Pizza Delivery Driver" ,
  "jobPay": "21", 
  "jobDesc": "Require: Drivers License. Seeking someone to transport pizza from our restaurant to our customers. In this position, you will be required to confirm that orders have been correctly fulfilled before delivering the product to customers. ",
  "location": "Los Angeles, 23156"
}, 
{
  "id": 4,
  "img": movers,
  "jobTitle": "Movers" ,
  "jobPay": "30", 
  "jobDesc": "Looking for a physically fit, responsible individual to move furniture by loading items into and out of moving trucks. Movers are responsible for ensuring that items are undamaged and placed in the correct position in the new location.",
  "location": "San Francisco, 95654"
}
];








export default function JobsCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            E L E V A T E
          </Typography>
        </Toolbar>
      </AppBar>


      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Job Board
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Explore work opportunities that accomodates your schedule and fits your interests. 
            </Typography>


            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <p>
                    
                     <SearchBar/>
                   
                  </p>
                </Grid>
                <Grid item>
                  <Button component={ Link } to="/add-job" variant="contained" color="primary">
                    Add Job
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Profile
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Logout
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                Featured Listings
            </Typography>
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.jobTitle} | ${card.jobPay}/hr
                    </Typography>
                    <Typography>
                      {card.jobDesc}
                    </Typography>

                    <Typography>
                      <LocationOnIcon color="primary" />
                        {card.location}
                      </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Apply
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}