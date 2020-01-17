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
import GridCard from './components/GridCard'


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
            <GridCard product={product}>
            </GridCard> 
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