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
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/core/IconButton';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const App = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <div>
    <Grid container>
      <Grid item sm={1}></Grid>
      <Grid item sm={10}>
        <Grid container spacing="4" float="center" justify="center" alignItems ='center' maxWidth="100">
          {products.map(product => 
            <Grid item sm pt={40} pb={40}>
              <Card>
              <div style="width:100%; text-align:center">
                <img src={"/products/".concat(product.sku+"_1.jpg")}alt ="help" />
              </div>
                <CardContent> 
                <Typography key={product.sku} gutterBottom variant="h6" component="h6">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {"Description: ".concat(product.description)}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  {"$ ".concat(product.price)}
                </Typography>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button>S</Button>
                    <Button>M</Button>
                    <Button>L</Button>
                    <Button>XL</Button>
                  </ButtonGroup>
                </CardContent>
              </Card>
            </Grid>
          )}
          
        </Grid>
      </Grid>
      <Grid item s={1} >
        <IconButton color="primary" aria-label="add to shopping cart">
          <Button>Cart</Button>      
        </IconButton>
      </Grid>
    </Grid>
    </div>
  );
};

export default App;