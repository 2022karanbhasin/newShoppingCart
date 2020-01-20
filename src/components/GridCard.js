import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';


const GridCard = ({product, AddItem, availableSizes}) => {
    let productt=product
    product.size="0"
    let determinedbutton=determineButton(productt,AddItem,availableSizes)
    return(
        <Grid item xs={3} alignItems="center" alignContent="center">
        <Card alignItems="center" alignContent="center">
          <img src={"/products/".concat(product.sku+"_1.jpg")} alt ="help" width="200" height="300" />
          <CardContent> 
          <Typography key={product.sku} gutterBottom variant="h6" component="h6" align="center">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            {"Description: ".concat(product.description)}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" align="center">
            {"$ ".concat(product.price)}
          </Typography>
          <div align="center">

          <div>

          
          <ButtonGroup size="small" aria-label="small outlined button group" align="center">
              {availableSizes.map(size =>
                <Button onClick={() => AddItem(size, productt)}>{size}</Button>
              )}
            </ButtonGroup>
          </div>
          
          {determinedbutton}
          
        </div>
            
          </CardContent>
        </Card>
      </Grid>

    );
    
}
const determineButton = (productt,AddItem,availableSizes) => {
  if (availableSizes.length!==0){
    
    return(
    <div style={{marginTop: 10}}>
      <Button mr = {1} color="primary" variant="contained" onClick={() => AddItem("L", productt)} size="large" aria-label="small outlined" align="center" >
         Add to Cart
      </Button>
    </div>)

  }
  else{
    console.log("debugging")
    return(
      <div style={{marginTop: 10}}>
        <Button mr = {1} color="primary" variant="contained" size="large" aria-label="small outlined" align="center" >
           Out of Stock
        </Button>
      </div>)
  }
}

export default GridCard;