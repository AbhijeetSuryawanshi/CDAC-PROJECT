import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Footer } from "./Footer";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import { Link } from 'react-router-dom';



const styles = {
    head: {
        fontWeight: '600',
        marginLeft: '200px',
        marginBottom: '3%'
    },
    image: {
        width: '70%',
        height: '70%',
        padding: '5px',
    }
}
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px',
        marginLeft: '200px',
        maxWidth: 1200
    }
    
}));


function Compare() {
    const classes = useStyles();
    let { arr } = useParams();
    let array = [];
    let count = 0;
    for (let i = 0; i < 5; i++) {

        if (arr[i] != "," && arr[i] != undefined) {

            array[count] = parseInt(arr[i]);
            count++;
        }

    }



    let vehicleDetails = useRef([]);
    let chargingDetails = useRef([]);
    let vehicleFeatures = useRef([]);
    let vName1 = useRef([]);
    let vName2 = useRef([]);
    let vName3 = useRef([]);
    let v3IsPresent = useRef(false);
    const [flag, setFlag] = useState(0);
    let user = JSON.parse(localStorage.getItem('activeUser'));
    const tempArr1 = [];
    const tempArr2 = [];
    const tempArr3 = [];
    useEffect(() => {

        for (let i = 0; i < array.length; i++) {


            axios.get(`http://localhost:8080/vehicles/${array[i]}`,
                {
                    auth: {
                        username: user.email,
                        password: user.password
                    }
                }).then((resp) => {
                    tempArr1.push(resp.data);

                });




            axios.get(`http://localhost:8080/chargingDetails/${array[i]}`,
                {
                    auth: {
                        username: user.email,
                        password: user.password
                    }
                }).then((resp) => {
                    tempArr2.push(resp.data);

                });


            axios.get(`http://localhost:8080/vehicleFeatures/${array[i]}`,
                {
                    auth: {
                        username: user.email,
                        password: user.password
                    }
                }).then((resp) => {
                    tempArr3.push(resp.data);

                });
        }
        vehicleDetails.current = tempArr1;
        chargingDetails.current = tempArr2;
        vehicleFeatures.current = tempArr3;


    }, []);
    useEffect(() => {
        setTimeout(() => {

            vehicleDetails.current.forEach((e, index) => {

                if (index == 0) {
                    vName1.current = e.vehicleName;
                }
                else if (index == 1) {
                    vName2.current = e.vehicleName;
                }
                else {
                    vName3.current = e.vehicleName;
                    if (vName1.current != null) {
                        v3IsPresent.current = true;
                    }
                }
            })
            setFlag(!flag);
        }, 2000);
    }, []);


    return (
        <>

            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Link to='/CompareVehicles' style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
            {v3IsPresent.current ?
                <h1 style={styles.head}>{vName1.current} vs {vName2.current} vs {vName3.current} Comparison :- </h1> :
                <h1 style={styles.head}>{vName1.current} vs {vName2.current} Comparison :- </h1>
            }
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table sx={{ minWidth: 650,backgroundColor:'#e0f7fa' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell sx={{ width: "25%",backgroundColor:'#80deea',fontFamily:'Times New Roman',fontSize:'20px',fontWeight:'600'}}>Specifications</TableCell>

                            {vehicleDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%",backgroundColor:'#80deea',fontFamily:'Times New Roman',fontSize:'20px',fontWeight:'600'}}>{e.vehicleName}</TableCell>

                                )

                            })}


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >

                            <TableCell sx={{ width: "25%" }}>Image</TableCell>

                            {vehicleDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}><img style={styles.image} src={e.vehicleImage}></img></TableCell>

                                )

                            })}

                        </TableRow>
                        <TableRow >


                            <TableCell sx={{ width: "25%" }}>Vehicle Price</TableCell>

                            {vehicleDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.vehiclePrice}<br></br>
                                        {e.location}</TableCell>


                                )

                            })}

                        </TableRow>
                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Battery Capacity</TableCell>

                            {chargingDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.batteryCapacity}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>

                            <TableCell sx={{ width: "25%" }}>Battery Type</TableCell>

                            {chargingDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.batteryType}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>

                            <TableCell sx={{ width: "25%" }}>Charging Time</TableCell>

                            {chargingDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.chargingTime}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Driving Range</TableCell>

                            {chargingDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.drivingRange}</TableCell>

                                )

                            })}


                        </TableRow>

                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Fast Charging Available</TableCell>

                            {chargingDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.fastCharging}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Motor Torque Available</TableCell>

                            {chargingDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.motorTorque}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Motor Type</TableCell>

                            {chargingDetails.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.motorType}</TableCell>

                                )

                            })}


                        </TableRow>

                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>No. of Air Bags Available</TableCell>

                            {vehicleFeatures.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.airBags}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Boot Space Available</TableCell>

                            {vehicleFeatures.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.bootSpace}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Front-Rear Brakes</TableCell>

                            {vehicleFeatures.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.frontRearBrakes}</TableCell>

                                )

                            })}


                        </TableRow>
                        <TableRow>


                            <TableCell sx={{ width: "25%" }}>Ground Clearance</TableCell>

                            {vehicleFeatures.current.map((e) => {
                                return (

                                    <TableCell sx={{ width: "25%" }}>{e.groundClearance}</TableCell>

                                )

                            })}


                        </TableRow>
                          <TableRow>

                            
                                    <TableCell sx={{ width: "25%" }}>Seating Capacity</TableCell>
                                
                                {vehicleFeatures.current.map((e) => {
                                    return (
                                       
                                            <TableCell sx={{ width: "25%" }}>{e.seatingCapacity}</TableCell>
                                       
                                    )

                                })}
                            

                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>



            <Footer />
        </>
    );
}
export default Compare