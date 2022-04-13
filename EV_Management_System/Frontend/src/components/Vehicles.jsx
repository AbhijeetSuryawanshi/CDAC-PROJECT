
import { Card } from "@mui/material"
import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import './arrow.css';
import axios from 'axios';

const styles = {
    content: {
        marginLeft: '3%',
        marginTop: '25%'
    },
    head:{
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '3%'
    },
    autodata: {
        textDecoration: 'none',
    },
    cards: {
        backgroundColor: '#FFFF',
        width: '450px',
        marginTop: '2%',
        height: '470px',
        marginLeft: '3%',
        textAlign: 'center',
        boxShadow: '0 50px 20px rgba(0,0,0,.12), 0 14px 8px rgba(0,0,0,.06)',
    },
    image: {
        width: '90%',
        height: '60%',
        padding: '20px',
    },
}



const Line = styled.hr`
    width: 15px;
    height: 65px;
    background: #FF546D;
    margin-left: 2%;
    margin-bottom: -6%;
`
const breakPoints = [{ width: 1, itemsToShow: 2 }];

function Vehicles({vehiclesD}) {
    const [vehicleArticles, setVehicleArticles] = useState([]);


    
    
    useEffect(() => {
            
                
                if(vehiclesD!=undefined)
                {
                        setVehicleArticles(vehiclesD);
                        return;
                }
                else
                {
                    getVehicles();
                }
                
                
            
            
        
    }, [vehiclesD])


   
    const getVehicles = async () => {
         axios.get('http://localhost:8080/vehicles')
        .then((res)=>{
        let vehiclesData = res.data;
        setVehicleArticles(vehiclesData);
    }).catch(err=>err)
  }
  function isUserPresent()
    {
        let user=localStorage.getItem('activeUser');
        
        if(!user)
            return false;
        else
        {
           return true;    
        }
    }
    

     return (
        <>
            <div style={styles.content}>
                <Line />
                <h1 style={styles.head}>Vehicles</h1>
                <Grid container direction='row' justify='center' alignItems='center' >
                    <Carousel breakPoints={breakPoints}>
                        {vehicleArticles.map((e, index) => {
                             
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
                        })}
                    </Carousel>
                </Grid>
            </div>
           
        </>
    ) 
}

export { Vehicles }