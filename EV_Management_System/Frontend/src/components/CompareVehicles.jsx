
import { Card} from "@mui/material"
import { useState, useEffect, useRef } from "react"
import Grid from '@mui/material/Grid';
import Button from '@material-ui/core/Button';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import './arrow.css';
import axios from 'axios';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


const styles = {
    content: {
        marginLeft: '3%',
        marginTop: '5%'
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
        backgroundColor: '#D6DFDE',
        width: '500px',
        marginTop: '2%',
        height: '600px',
        marginLeft: '3%',
        textAlign: 'center',
        boxShadow: '0 50px 20px rgba(0,0,0,.12), 0 14px 8px rgba(0,0,0,.06)',
    },
    image: {
        width: '90%',
        height: '60%',
        padding: '20px',
    },
    compare: {
        fontWeight: '550',
        marginLeft: '10%',
        marginBottom: '3%'

    },
    button: {
        marginLeft: '10%',
        marginBottom: '3%'
    }
}



const Line = styled.hr`
    width: 15px;
    height: 65px;
    background: #FF546D;
    margin-left: 2%;
    margin-bottom: -6%;
`
const breakPoints = [{ width: 1, itemsToShow: 2 }];

function CompareVehicles({vehiclesD}) {
    const [vehicleArticles, setVehicleArticles] = useState([]);
    const [active, setActive] = useState();
    const [flag, setFlag] = useState(false);
  
    const arr=useRef([]);
    const i=useRef(0);
    const filteredVehicles=useRef([]);
    
  
    
    
    
    useEffect(() => {
            
                
                if(vehiclesD!=undefined)
                {
                        setVehicleArticles(vehiclesD);
                        return;
                }
                else
                {
                    getVehicle();
                }
                
                
            
            
        
    }, [vehiclesD])
    
    const setVId=(vid)=>{
    let count=0;
    if(i.current<3){
        for(let j=0;j<3;j++)
          {
              if(arr.current[j]==vid)
              {
                  alert("You have already selected this vehicle. Please select another vehicle.");
                  count++;
                  break;
              }
          }
    if(count!=1){
    arr.current[i.current]=vid; 
    filteredVehicles.current[i.current]=vehicleArticles.find((element)=>element.id==vid);
    i.current=i.current+1;
    
    }
    }
    else{
    alert("You can select maximum three vehicles only...");
    }
    

    }
    useEffect(()=>{
        if(i.current==2){
            setFlag(true);
        }
        

    })
   
    const getVehicle = async () => {
         axios.get('http://localhost:8080/vehicles')
        .then((res)=>{
        let vehiclesData = res.data;
        setVehicleArticles(vehiclesData);
        
    }).catch(err=>err)
  }
  
    
    return (
        <>
        <Navbar/>
        
            <div style={styles.content}>
                <Line />
                <h1 style={styles.head}>Choose Vehicles To Compare -</h1>
                <Grid container direction='row' justify='center' alignItems='center' >
                    <Carousel breakPoints={breakPoints} >
                        {vehicleArticles.map((e, index) => {
                             
                            return (
                                <div key={index} >
                                    <Grid container>
                                         
                                            <Card style={styles.cards}>
                                                <img style={styles.image} src={e.vehicleImage}  />
                                                <h3>{e.vehicleName}</h3>
                                                <h3>{e.vehiclePrice}</h3>
                                                <Button variant="contained" color={active === index ? "primary" : "secondary"} onClick={() =>{ setActive(index);
                                                setVId(e.id)}}>Compare</Button><br></br>
                                               
                                            </Card>
                                            
                                        
                                    </Grid>
                                </div>
                            )
                        })}
                    </Carousel>
                </Grid>
                
            </div>
            <div>
                 <Line />
                 <h1 style={styles.head}>Selected Vehicles To Comapre -</h1>
                {filteredVehicles.current.map((e,index)=>{
                   return(
                       <h2 style={styles.compare}>{index+1} : {e.vehicleName}</h2>
                   ) 
                })}
                  {flag ? <Link to={`/Compare/${arr.current}`} style={{textDecoration:'none'}}><Button variant="contained" color="primary" style={styles.button}>Compare Now</Button></Link> : null}  
                 
                </div>
        <Footer/>
           
        </>
    ) 
}

export default CompareVehicles 