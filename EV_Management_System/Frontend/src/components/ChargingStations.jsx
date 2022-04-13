import { useEffect, useRef, useState } from "react";

import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Card } from "@mui/material";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import axios from 'axios';

const styles = {
    content: {
        marginLeft: '1%',
        marginTop: '4%'
    },
    head: {
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '1%'
    },
    card1: {
        //backgroundColor: '#BDE8F7',
        width: '370px',
        marginTop: '2%',
        height: '500px',
        marginLeft: '3%',
        textAlign: 'center',
        boxShadow: '0 50px 20px rgba(0,0,0,.12), 0 14px 8px rgba(0,0,0,.06)',
    },
    card2: {
        backgroundColor: '#BDE8F7',
        width: '1050px',
        marginTop: '5%',
        height: '200px',
        marginLeft: '2%',
        textAlign: 'left',
        fontFamily:'Times New Roman',
        fontSize:'20px'

    },
    image: {
        width: '70%',
        height: '50%',
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

function ChargingStations() {
    let { id } = useParams();
    let {cityName} = useParams();
    let user = JSON.parse(localStorage.getItem('activeUser'));
    const [chargingStations, setChargingStations] = useState([]);
    const [count,setCount]=useState(0);
    useEffect(() => {
        axios.get(`http://localhost:8080/chargingStations/${id}`,
            {
                auth: {
                    username: user.email,
                    password: user.password
                }
            }).then((resp) => {
                setChargingStations(resp.data);
                setCount(resp.data.length);

            });
    }, []
    )

    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Link to='/ChargingCities' style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
            
            {(chargingStations.length!=0)?
            <div>
            <Line />
            <h1 style={styles.head}>Charging Stations in {cityName} City :-</h1>
            <br></br>
            <h3 style={styles.head}>Total Charging Stations Available :- {count}</h3>

            <div style={styles.content}>

                <Grid container direction='row' justify='center' alignItems='center' >

                    {chargingStations.map((e, index) => {

                        return (
                            <div key={index} >
                                <Grid container>

                                    <Card style={styles.card1}>
                                        <img style={styles.image} src={e.stationImage} />
                                        <h3>{e.stationName}</h3>
                                        <h3>{e.stationAddress}</h3>
                                    </Card>
                                </Grid>
                            </div>
                        )
                    })}

                </Grid>
            </div> 
            </div>
            :
            <Card style={styles.card2}><h2 style={styles.head}>Currently there isn't any Charging Station available in {cityName} City...</h2>
            <h2 style={styles.head}>We will let you know when available.</h2>
            </Card>}
            <br></br>
            <br></br>
            <br></br>

        </>
    )
}

export default ChargingStations