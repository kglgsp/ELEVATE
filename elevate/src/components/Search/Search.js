import React, {Component} from 'react';
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
import dataentryPerson1 from '../../assets/img/dataentryPerson1.png';
import socialmediaPerson2 from '../../assets/img/socialmediaPerson2.jpg';
import essayPerson3 from '../../assets/img/essayPerson3.png';
import translationPerson4 from '../../assets/img/translationPerson4.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export function Search(){
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
          <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>
                Search Matches (1) | Similar Jobs (3)
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

const cards = [
    {
      "id": 1,
      "img": dataentryPerson1,
      "jobTitle": "Data Entry" ,
      "jobPay": "15", 
      "jobDesc": "Assist student with homework, teaching them how to perform the calculations needed to complete their assignments.",
      "location": "Riverside, CA 92507"
    }, 
    {
      "id": 2,
      "img": socialmediaPerson2,
      "jobTitle": "Social media posting" ,
      "jobPay": "10", 
      "jobDesc": "I'm looking for a social media savvy person to post about a weeklong campaign for an organization. Extra points if you know what a Tik Tok is. I will compensate you for your time very handsomely.",
      "location": "Riverside, CA 92513"
    }, 
    {
      "id": 3,
      "img": essayPerson3 ,
      "jobTitle": "Essay writing" ,
      "jobPay": "15", 
      "jobDesc": "I need to pass my English class, however my English skills are abysmal. If you can also teach me what an oxford comma is, that'd be great.",
      "location": "Riverside, CA 92621"
    }, 
    {
      "id": 4,
      "img": translationPerson4,
      "jobTitle": "Translation" ,
      "jobPay": "20", 
      "jobDesc": "I'm looking to translate 4 research papers(on axolotls!) written in Arabic to English. Please contact me!",
      "location": "Riverside CA, 92501"
    }
    ];


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


