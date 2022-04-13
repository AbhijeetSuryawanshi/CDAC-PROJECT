import { useEffect, useRef, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button } from "@mui/material";
import Carousel from "react-elastic-carousel";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


import { Link } from 'react-router-dom';
import AboutVehicle from "./AboutVehicle";
import RatingSection from './RatingSection';

import { Rating } from "@mui/material";
import FeatureCard from "./FeatureCard";
import IconText from "./IconText";

import { useParams } from 'react-router-dom';
import axios from 'axios';


const styles = {
     textAlign: 'center', width: '100%', fontFamily: 'Montserrat', fontSize: '37px', fontWeight: '600'
};

const head = {
     textAlign: 'center', width: '100%', fontFamily: 'Rozha One', fontSize: '37px'
};
const styles2 = {
     textAlign: 'center', width: '100%', fontFamily: 'Montserrat'
}
const image= {
     width: '50%',
     height: '50%',
     padding: '20px',
 }
const breakPoints = [{ width: 1, itemsToShow: 1 }];

export default function ProductDetails() {

     let { id } = useParams();
     let tReviews = 0;
     let totalRating = 0;
     let user = JSON.parse(localStorage.getItem('activeUser'));

     const [vehicleData, setVehicleData] = useState([]);
     const [chargingDetails, setChargingDetails] = useState([]);
     const [vehicleFeatures, setVehicleFeatures] = useState([]);
     const [reviews,setReviews] = useState([]);
     const [totalReviews,setToatalReviews] = useState(tReviews);
     const [avgRating,setavgRating] = useState(0);
     useEffect(() => {
          axios.get(`http://localhost:8080/vehicles/${id}`,
               {
                    auth: {
                         username: user.email,
                         password: user.password
                    }
               }).then((resp) => {

                    setVehicleData(resp.data);
               });
          axios.get(`http://localhost:8080/chargingDetails/${id}`,
               {
                    auth: {
                         username: user.email,
                         password: user.password
                    }
               }).then((resp) => {

                    setChargingDetails(resp.data);
               });
          axios.get(`http://localhost:8080/vehicleFeatures/${id}`,
               {
                    auth: {
                         username: user.email,
                         password: user.password
                    }
               }).then((resp) => {

                    setVehicleFeatures(resp.data);
               });
          axios.get(`http://localhost:8080/reviews/${id}`,
               {
                    auth: {
                         username: user.email,
                         password: user.password
                    }
               }).then((res) => {
                    setReviews(res.data);
                    });

     }, []);
     useEffect(()=>{
          
          
          for (let i = 0; i < reviews.length; i++) {
               tReviews++;
               totalRating = totalRating + reviews[i].rating;}
          setToatalReviews(tReviews);
          setavgRating((totalRating / tReviews).toFixed(1));
     },[reviews]);
     useEffect(()=>{
     },[totalReviews,avgRating]);


     let intro1 = [
          <IconText icon="timer" feature="Time to charge" text={chargingDetails.chargingTime}></IconText>,
          <IconText icon="road" feature="Driving Ranges" text={chargingDetails.drivingRange}></IconText>,
          <IconText icon="battery" feature="Battery Capacity" text={chargingDetails.batteryCapacity}></IconText>,
          <IconText icon="power" feature="Motor Torque" text={chargingDetails.motorTorque}></IconText>,


     ]
     let intro2 = [
          <IconText icon="cable" feature="Fast Charging" text={chargingDetails.fastCharging}></IconText>,
          <IconText icon="batteryFull" feature="Battery Type" text={chargingDetails.batteryType}></IconText>,
          <IconText icon="electricCar" feature="Motor Type" text={chargingDetails.motorType}></IconText>,

     ]
     let features1 = [
          <IconText icon="cloudUpload" feature="No. of Air Bags" text={vehicleFeatures.airBags}></IconText>,
          <IconText icon="work" feature="Boot Space" text={vehicleFeatures.bootSpace}></IconText>,
          <IconText icon="newReleases" feature="Front and Rear Brakes " text={vehicleFeatures.frontRearBrakes}></IconText>,


     ]
     let features2 = [
          <IconText icon="airportShuttle" feature="Ground Clearance" text={vehicleFeatures.groundClearance}></IconText>,
          <IconText icon="group" feature="Seating Capacity" text={vehicleFeatures.seatingCapacity}></IconText>


     ]
     return (<>

          <AppBar position="static" >
               <Toolbar variant="dense" >
                    <Link to="/" style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                         <ArrowBackIosNewIcon />
                    </IconButton>
                    </Link>


                    <Typography variant="h1" color="inherit" component="div" style={head}>
                         Your E-Assistant
                    </Typography>
               </Toolbar>
          </AppBar>




          {/* <div>
               <img src={vehicleData.vehicleImage} 
                    height="550px" width="100%"  style={{ position: 'absolute'}} alt="Not Found" />

          </div> */}

          <Box style={{ marginTop: '20px' }}>
               <Typography variant="h1" color="black" component="div" style={styles}>
                    {vehicleData.vehicleName}
               </Typography>
               <div style={{ textAlign: 'center' }}>
                    <Rating value={avgRating} precision="0.5" readOnly="true" size="large" style={{ fontSize: '30px' }} />

                    <Typography variant="p" color="black" component="div" style={styles2} >
                         {totalReviews} Reviews
                    </Typography>

                    <Typography variant="h6" color="black" component="div" style={styles2} >
                         {vehicleData.vehiclePrice}
                    </Typography>

                    <Typography variant="p" color="black" component="div" style={styles2} >
                         {vehicleData.location}
                    </Typography>


               </div>
          </Box>
          <Carousel breakPoints={breakPoints} >
                        {/* {vehicleGallery.map((e, index) => {
                             
                            return (
                                <div key={index} >
                                    <Grid container>
                                         <NavLink to={isUserPresent()===true?`/vehicles/${e.id}`:`/Login`} style={styles.autodata}>
                                            <Card style={styles.cards}>
                                                <img style={styles.image} src={e.vehicleImage}  />
                                                <h3>{e.vehicleName}</h3>
                                                <h3>{e.vehiclePrice}</h3>
                                                
                                            </Card>
                                        </NavLink>
                                    </Grid>
                                </div>
                            )
                        })} */}
                         <img style={image} src={vehicleData.vehicleImage}   />
                    </Carousel>


          <Box sx={{ margin: 'auto', width: '80%'}}>
               <FeatureCard titles={`Key Specs of ${vehicleData.vehicleName}`} featureList={intro1} />
          </Box>
          <Box sx={{ margin: 'auto', width: '80%' }}>
               <FeatureCard titles={`Key Specs of ${vehicleData.vehicleName}`} featureList={intro2} />
          </Box>

          <Box sx={{ margin: 'auto', width: '80%' }}>
               <FeatureCard titles={`Features of ${vehicleData.vehicleName}`} featureList={features1} />
          </Box>
          <Box sx={{ margin: 'auto', width: '80%' }}>
               <FeatureCard titles={`Features of ${vehicleData.vehicleName}`} featureList={features2} />
          </Box>
          <Box sx={{ margin: 'auto', width: '79%' }}>
               <AboutVehicle title={`${vehicleData.vehicleName} Info`} about={vehicleData.vehicleInfo} />
          </Box>
          <Box sx={{ margin: 'auto', width: '78%' }}>

               <RatingSection style={{ overflow: 'scroll' }} title={`${vehicleData.vehicleName} User Reviews`} avgRating={avgRating} totalReviews={totalReviews} />
               <br/>
               {(totalReviews!=0)?<Link to={`/Reviews/${id}`} style={{ textDecoration: 'none' }}><Button variant="contained">All reviews</Button></Link>
               :null}
          </Box>
          <br />
          <br />
          <br />
          <br />
     </>);


}