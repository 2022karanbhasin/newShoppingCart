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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import Sidebar from './components/Sidebar'
import GridCard from './components/GridCard'
import Box from '@material-ui/core/Box';
import SimpleMenu from './components/Menu'
import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



const useStyles = makeStyles(theme => ({
  header: {
    fontSize: 44,
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: '46.25%', // 16:9
  },

  selecter: {
    float: "right",
    potition: "relative",
    right: 1000
  }
 
}));
var firebaseConfig = {
      apiKey: "AIzaSyBib1C7fQyGgWHco15BraR2CY7sAqwbpDs",
      authDomain: "shoppingcartreact.firebaseapp.com",
      databaseURL: "https://shoppingcartreact.firebaseio.com",
      projectId: "shoppingcartreact",
      storageBucket: "shoppingcartreact.appspot.com",
      messagingSenderId: "1008845348558",
      appId: "1:1008845348558:web:f97bd0e25586722f77ba9f",
      measurementId: "G-VNX74ECB3Y"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database().ref();
    const dbref=firebase.database().ref("carts/");

  const Banner = ({ user }) => (
    <React.Fragment>
      { user ? <Welcome user={ user } /> : <SignIn /> }
    </React.Fragment>
  );

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
  
      signInSuccessWithAuthResult: () => false
    }
  };
 
  const SignIn = () => (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}
    />
  );
  const Welcome = ({ user }) => (
    <Box  marginTop={1} height={40} width="100%" textAlign="center" alignContent="center">
  
        Welcome, {user.displayName}
  
      <Box marginTop={1}>
          <Button color="primary" variant="contained" size="small " aria-label="small outlined" align="center" onClick={() => firebase.auth().signOut()}>
              Log out
          </Button>
      </Box>
    </Box>
  );

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [data, setData] = useState({});
//   const [cart, setCart] = useState([]);
//   const [inventory, setInventory] = useState({})
//   const [state, setState] = React.useState({
//     right: false,
//   });
//   const[noLongerAvailable, setNoLongerAvailable]=useState([]);
//   const[catalog, setCatalog]=useState([]);
//   const[totalCost, settotalCost]=useState(0)


  
//   const handleInventoryChange=(value)=>{
    
//     setInventory(value)
//     initializeNotAvailable(value);
//     initializeCatalog(value);
//   }



//   function gotData(data){
//     let contents=cart
//     let i=0
    
//     let foundItem=false;
//     // console.log("this is length of cart")
//     // console.log(data.val()["cartt"].length)
//     // console.log(data["cartt"])
//     for (i=0;i< data.val()["cartt"].length; i++){
//       let count=0;
//         if((contents.map(thing => thing.product.sku)).indexOf(data.val()["cartt"][i].product.sku)===-1){
//           //product not in list, so just add it. 
//           contents.push({
//             product: data.val()["cartt"][i].product,
//             size: data.val()["cartt"][i].size,
//             quantity: data.val()["cartt"][i].quantity
//           })

//         }
        
//         else
//           { 
//             for( count=0; count<contents.length; count++){

//               if(contents[count].product.sku===data.val()["cartt"][i].product.sku && contents[count].size===data.val()["cartt"][i].size){
//                 contents[count].quantity+=data.val()["cartt"][i].quantity;
//                 foundItem=true
//               }
              
//             }
//             if(count==contents.length-1 && !foundItem){
//               contents.push({
//                 product: data.val()["cartt"][i].product,
//                 size: data.val()["cartt"][i].size,
//                 quantity: data.val()["cartt"][i].quantity
//               })
//             }
            
//           }
      
//     }
//   }
//   function updateCheckout(){
//     let contents=[];
//     setCart(contents)
//     dbref.child(user["uid"]).set({
//       cartt: cart
//     }); 
//     db.set(inventory)
//   }
//   function err(err){
//     console.log("error")
//   }
//   function writeUserData(user) {
    
//     const dbuid=firebase.database().ref("carts/"+user.uid)
//     dbuid.on('value', gotData, err)


//     dbref.child(user["uid"]).set({
//       cartt: cart
//     });
//     return () => { db.off('value', gotData); 
//     }
//   }

//   const initializeNotAvailable=(value)=>{
//     let appendable=[]
//     let i=0;
//     let sizes=["S","M","L","XL"];
//     for (i=0;i<products.length;i++){
//       for (let j=0;j<4;j++){
//         if (value[products[i].sku][sizes[j]]===0)
//         {
//           appendable.push({sku:products[i].sku, size:sizes[j] })
//         }
      
//       }
//     }
//     for(let i=0; i<cart.length; i++)
//       {
//        if(value[cart[i].product.sku][cart[i].size]-cart[i].quantity<0)
//        {
//         RemoveItem(cart[i].size,cart[i].product)
//        }
//       }
//     setNoLongerAvailable(appendable);
//   }
//   const initializeCatalog=(value)=>{
//     let temp=value;

//     if (cart.length===0){
//       setCatalog(temp)
//     }
//     else{
//       for(let i=0; i<cart.length; i++)
//       {
//        if(temp[cart[i].product.sku][cart[i].size]-cart[i].quantity>=0){
//         temp[cart[i].product.sku][cart[i].size]-=cart[i].quantity;
//        }
       
//       }
//       setCatalog(temp);
//     }
//     console.log("this is catalog")
//     console.log(catalog)
    
//   }
  

//   const products = Object.values(data);
//   useEffect(() => {

//     const handleData = async snap => {
//       if (snap.val()){
//        handleInventoryChange(snap.val())
//       }
//       const response = await fetch('./data/products.json');
//       const json = await response.json();
//       setData(json);
      
//     }
    
//     db.on('value', handleData, error => alert(error));
    
//     return () => { db.off('value', handleData); };
    
 
//    }, []);
   

//   useEffect(() => {
    
//     firebase.auth().onAuthStateChanged(setUser);
    
//   }, []);


  
//   const AddItem = (size, productt) => {
   
//     console.log("this is catalog")
//     console.log(catalog)
//     console.log("This is inventory")
//     console.log(inventory)
//      let contents = cart;
//     let foundItem = false;
//     let i;
//     for (i = 0; i < cart.length; i++) {
      
//       if (contents[i].product.sku === productt.sku && size===contents[i].size ) {
//         foundItem = true;
//         break;
//       }
//     }
    
//     let inventorie=inventory;
//     if (foundItem && inventory[productt.sku][size]!==0) {
//       contents[i].quantity += 1;
//       inventorie[productt.sku][size]-=1
//       setInventory(inventorie)
//     }
//     else {
//         if(inventory[productt.sku][size]!==0){
//         contents.push({
//           product: productt,
//           size: size,
//           quantity: 1
//         })
//         inventorie[productt.sku][size]-=1
//         setInventory(inventorie)
//       }
//   }
//     setState({ right: true });
//     setCart(contents);
    
//     if(user){
//       writeUserData(user,cart)
//     }

//   }


//   const returnSizes = (product) => {
//     let inventorie=inventory[product.sku]
//     let returnable=[]
//     if (inventorie && inventorie["S"]!==0) {
//       returnable.push("S")
//     }
//     if (inventorie && inventorie["M"]!==0) {
//       returnable.push("M")
//     }
//     if (inventorie && inventorie["L"]!==0) {
//       returnable.push("L")
//     }
//     if (inventorie && inventorie["XL"]!==0) {
//       returnable.push("XL")
//     }
//     return returnable
//   }

//   const DecreaseItem = (size, productt) => {
//     let contents = cart;
//     let foundItem = false;
//     let i;
//     let value=0
//     console.log("this is cart")
//     console.log(contents)
//     console.log("this is productt")
//     console.log(productt)
//     console.log("this is size")
//     console.log(size)

//     for (i = 0; i < cart.length; i++) {
//       if (contents[i].product.sku === productt.sku && size===contents[i].size ) {
//         foundItem = true;
//         break;
//       }
//       value++
//     }
//     if (foundItem & contents[value].quantity!==1) {
//       contents[i].quantity -= 1;
//       let inventorie=inventory;
//       console.log("this is productt")
//       console.log(productt)

//       inventorie[productt.sku][size]+=1
//       setInventory(inventorie)
      
//     }
//     else {
//       RemoveItem(contents[i].size,contents[i].product)
//     }
//     setCart(contents);
//     if(user){
//       writeUserData(user,cart)
//     }
    
//   }
//   const RemoveItem = (size, productt) => {
//     console.log("REMOVEITEM was called")
//     let contents = cart;
//     let i;

//     for (i = 0; i < cart.length; i++) {
//       if (contents[i].product.sku === productt.sku && size===contents[i].size ) {
//         break;
//       }
//     }
    
//     console.log("this is i")
//     console.log(i)
//     console.log(inventory)
//     let inventorie=inventory;
//     inventorie[productt.sku][size]+=contents[i].quantity
//     setInventory(inventorie)
//     setState({right: false})
//     contents.splice(i,1)
//     setCart(contents);
//     if(user){
//       writeUserData(user,cart)
//     }
//   }
  
//   let classes = useStyles;
//   // console.log("this is products")
//   // console.log(products)
  
//   return (
//     <div>
//     <Grid container>
//       <Grid item sm={1}>
        
//       </Grid>
//       <Grid item sm={9}>
//       <Banner user={ user } />
//         <Box paddingTop={1} paddingBottom={5} flexDirection="row"  >
//           <Grid container spacing="10" float="center" justify="center" alignItems ='center'>
//             <Grid item width="100%">
//               <Typography className={classes.header} color="textPrimary" variant="h3" component="h1" style={{textAlign: "center"}}>
//                   Your Very Own Shopping Experience!
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography  color="textPrimary" variant="h5" component="h3" > 
//                 Order By 
//                </Typography> 
//                 <SimpleMenu />
//             </Grid>

//           </Grid>
          
//         </Box>
          
//           <Grid container spacing="10" float="center" justify="center" alignItems ='center'>
//             {products.map(product => 
//               <GridCard product={product} AddItem={AddItem.bind(this)} availableSizes={returnSizes(product)}>
//               </GridCard> 
//             )}
//           </Grid>
//       </Grid>
//       <Grid item s={2} >
//         <Box paddingTop={0} alignContent="center">
//           <Sidebar cartable={cart} state={state} setState={setState} AddItem={AddItem} RemoveItem={RemoveItem} DecreaseItem={DecreaseItem}/>
//         </Box>
//       </Grid>
//     </Grid>
//     </div>
//   );
// };
const App = () => {
  const [score, setScore] = useState(0);
  setScore(1);

  return <div>The score is {score}!</div>;
};

export default App;