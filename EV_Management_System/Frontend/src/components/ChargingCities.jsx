import { useState, useEffect, useRef } from "react"
import axios from 'axios';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styled from 'styled-components';
import Card from '@mui/material/Card';
import { NavLink } from "react-router-dom";



const ChargingCitiesSec = styled.div`
   margin-left: 4%;
   margin-bottom: 3%;
`


const styles = {
    
    content: {
        marginLeft: '3%',
        marginTop: '5%',
        
    },
    head: {
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '3%'
    },
    city: {
        marginLeft: '2%',
        marginTop: '6%'
    },
    cards: {
        backgroundColor: '#d32f2f',
        width: '20%',
        marginTop: '1.5%',
        padding: '20px'
    },
    citytext: {
        color: 'BLACK',
        textDecoration: 'none',

    },
    image: {
        zIndex: -10,
        position: "absolute", 
        top:0,
        marginTop: "600px",
        marginLeft: "300px", 
        width:"350px"     
    }
}
const Line = styled.hr`
    width: 15px;
    height: 65px;
    background: #FF546D;
    margin-left: 2%;
    margin-bottom: -6%;
`


function ChargingCities() {


    const [chargingCities, setChargingCities] = useState([]);

    let user = JSON.parse(localStorage.getItem('activeUser'));
    useEffect(() => {


        getChargingCities();
    }, [])

    const getChargingCities = async () => {

        axios.get('http://localhost:8080/chargingCities',
            {
                auth: {
                    username: user.email,
                    password: user.password
                }
            })
            .then((res) => {
                setChargingCities(res.data);
            }).catch(err => err)
    }
    return (
        <>
            <Navbar />
           
           
                <div style={styles.content}>
                    <Line />
                    <h1 style={styles.head}>Choose Your Current City -</h1>
                    <ChargingCitiesSec>
                        <h2 style={styles.city}>All Cities :-</h2>
                        {
                            chargingCities.map((data, index) => {
                                if (data) {
                                    return (
                                        <div key={index}>
                                            <Card style={styles.cards}>
                                                <NavLink to={`/ChargingStations/${data.id}/${data.cityName}`} style={styles.citytext}> <h3>{data.cityName}</h3></NavLink>
                                            </Card>
                                        </div>
                                    )
                                }
                                return null;
                            })}

                    </ChargingCitiesSec>

                </div>
                <div style={styles.image}>
           <img src="https://www.financialexpress.com/wp-content/uploads/2022/03/electric-car-sales-china.jpg" alt="not fount"/>
        </div>
    <Footer />
        </>
    );
}
export default ChargingCities