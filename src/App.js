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
import Sidebar from './components/Sidebar'


const App = () => {
  const [purchasable, setPurchase] = React.useState([]);

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
        <Grid container spacing="10" float="center" justify="center" alignItems ='center'>
          {products.map(product => 
            <Grid item xs={3.5} alignItems="center" alignContent="center">
              <Card alignItems="center" alignContent="center">
                <img src={"/products/".concat(product.sku+"_1.jpg")} alt ="help" />
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

                
                <ButtonGroup size="small" aria-label="small outlined button group" align="center">
                    <Button>S</Button>
                    <Button>M</Button>
                    <Button>L</Button>
                    <Button>XL</Button>
                  </ButtonGroup>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item s={1} >
        <Sidebar/>
      </Grid>
    </Grid>
    </div>
  );
};

export default App;