import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Grid from '@material-ui/core/Grid'
import GridCardBought from './GridCardBought'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from 'material-ui-icons';
import Box from '@material-ui/core/Box';






const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
  title: {
    fontSize: 44,
    textAlign: "center",
  },

});

export default function Sidebar({state, setState, cartable, AddItem, DecreaseItem, RemoveItem}) {
  const classes = useStyles();
  
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ right: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Card alignItems="center">
        <Typography className={classes.title} color="textPrimary" variant="h5" component="h2">
            Your Cart
        </Typography>
      </Card>


      <List>
       <Grid container spacing="10" float="center" justify="center" alignItems ='center'>
          <Grid item>
            {cartable.map(cartItem => 
            <div style={{marginTop: 10}} > 
              <GridCardBought cartItem={cartItem} AddItem={AddItem} DecreaseItem={DecreaseItem} RemoveItem={RemoveItem}>
             </GridCardBought>
            </div>
             
            
          )}
          </Grid>
        </Grid>
      </List>
      <Divider />
     
    </div>
  );

  return (
    <div style={{ width: '100%' }}>
        <div style={{ marginTop: 31, marginLeft: 80}}>

        
          <Box display="flex" justifyContent="center" >
            <Box mr={3}>
              <Button  onClick={toggleDrawer(true)} variant="contained" size="large" color="primary">
                Your Cart
              </Button>
            </Box>
            
          </Box>
        </div>
        
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
            {sideList('right')}
          </Drawer>
       
     
    </div>
  );
}
