import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import EmailIcon from '@material-ui/icons/Email';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';


import SwipeableViews from 'react-swipeable-views';

const styles = {
  tabs: {
    background: '#fff',
  },
  slide: {
    padding: 15,
    minHeight: '95vh',
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  slide4: {
    backgroundColor: '#6AC0FF',
  },
};

class SwipeTabs extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    console.log('tabs')
    const { index } = this.state;

    return (
      <div>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <Grid container spacing={16} justify="flex-end" alignItems='center'  style={Object.assign({}, styles.slide, styles.slide1)}>
              <Grid xs={6} justify="flex-end" alignItems='center'>
              <h3>F-Word</h3>
                <p>Mike Gallagher is just an all American boy. Mike teaches middle school English. Mike is engaged to the love of his life and happy as can be. Mike has everything going for him  - until his secret is exposed to the very person who could change his life forever. </p>
                <p>What starts out being just another Sunday matinee performance for Mike at a local theater, turns into the incident that would set his world spinning. Turns out men dressing in women’s clothing in public isn’t welcomed with open arms by all of the parents at Woodward West Middle School. As if his job being on the line weren’t enough, Mike just found out his fiancé is going to have a baby. Of all the F-Words he has been called, “father” is the one that now scares him most.</p>
                <p>This is a story about love, acceptance, understanding, and support. Accepting that everyone is different - whether we like it or not, understanding we might not understand why, and loving and supporting the people we care about most even if we don’t.</p>
                <p>Mike is just an All American boy - a boy who can sing and walk well in heels.</p>
              </Grid>
            </Grid>
            <Grid container spacing={16} justify="flex-end" alignItems='center'  style={Object.assign({}, styles.slide, styles.slide2)}>
            <h3>Cast</h3>
            <List >
              <ListItem >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary="Mike: Mike Wawrzynek" />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary="Janet: Connie Schelhamer" />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary="Violet: Jessica O’Hara-Baker" />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary="Bradley: Alex Gribble" />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary="Allie: Alicia Nordstrom" />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary="Principal Korin: Rob Klubek" />
              </ListItem>
            </List>
            </Grid>
          <Grid container spacing={16} justify="flex-end" alignItems='center' style={Object.assign({}, styles.slide, styles.slide3)}>
          <h3>Contact</h3>
          <List >
            <ListItem >
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <a href='mailto://fwordfilm@icloud.com'><ListItemText inset primary="General Email" /></a>
            </ListItem>
            <ListItem >
              <ListItemIcon>
                <ThumbUpIcon />
              </ListItemIcon>
              <a href='https://www.facebook.com/fwordfilmpa/'><ListItemText inset primary="Facebook" /></a>
            </ListItem>
          </List>
          </Grid>
        </SwipeableViews>
        <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
          <Tab label="F-word" />
          <Tab label="Cast & Crew" />
          <Tab label="Contact" />
        </Tabs>
      </div>
    );
  }
}

export default SwipeTabs;
