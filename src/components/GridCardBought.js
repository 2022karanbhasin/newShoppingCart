import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMepdia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 10,
      paddingTop: '46.25%', // 16:9
    },
   
  }));


const GridCardBought = ({cartItem, DecreaseItem, AddItem, RemoveItem}) => {
    const classes = useStyles();
    let product=cartItem.product
    return(
        <Paper xs={3.5} alignItems="center" alignContent="center">
        
        <Card alignItems="center" alignContent="center">
        <Grid container alignItems="center" alignContent="center">
          <Grid item>
           
            <img src={"/products/".concat(product.sku+"_1.jpg")} alt ="help" width="110" height="170" />
            
              
          </Grid>
      <Box width="70%">
        

          
          <div alignItems="center" alignContent="center" align="center" style={{marginBottom:5}}>

          
          <CardContent> 
              <Typography key={product.sku} gutterBottom variant="h6" component="h6" align="center">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" align="center">
                {"Size: ".concat(cartItem.size)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" align="center">
                {"Quantity: ".concat(cartItem.quantity)}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p" align="center">
                {"$ ".concat(product.price)}
              </Typography>
  
          </CardContent>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                  <Button onClick={() => DecreaseItem(cartItem.size, product)} >-</Button>
                  <Button onClick={() => AddItem(cartItem.size,product)}>+</Button>
                  <Button onClick={() => RemoveItem(cartItem.size,product)} >X</Button>
          </ButtonGroup>
          </div>
        
        </Box>
        </Grid>
  
        
        </Card>
      </Paper>

    );
    
}

export default GridCardBought;