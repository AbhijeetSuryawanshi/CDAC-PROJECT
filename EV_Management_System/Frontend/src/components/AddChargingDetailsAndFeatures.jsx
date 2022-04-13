import { useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { Footer } from "./Footer";
import Heading from "./HeadingInfo";
import { InputInfo } from "./InputInfo";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const styles = {

    
    box: {
        width: 550,
        height: 600,
        marginLeft: "30%",
        marginTop: "95px",
    },
    input: {
        width: "500px",
        height: "40px",
        fontFamily: "Arial",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        color: "red",

    },
    padding: {
        marginBottom: 15
    },
    button: {
        cursor: "Pointer",
        width: "510px",
        height: "40px",
        fontFamily: "Poppins",
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: 530,
        marginBottom: 5,
        marginTop: 22,
        color: "white",
        border: "none",
        outline: "none",
        backgroundColor: "#42D232"
    },
    arrowMark:{
        width: "500px",
        height: "30px",
        fontFamily: "Times New Roman",
        fontSize: "20px",
        fontWeight: 400,
        color: "black",
        backgroundColor:"lightGreen"

    }

}

const AddChargingDetailsAndFeatures = () => {
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem('activeUser'));
    let { id } = useParams();
    const [flag, setFlag] = useState(true);


    let HandleCreation = async (e) => {
        e.preventDefault();

        let batteryCapacity = e.target.batteryCapacity.value;
        let batteryType = e.target.batteryType.value;
        let chargingTime = e.target.chargingTime.value;
        let drivingRange = e.target.drivingRange.value;
        let fastCharging = e.target.fastCharging.value;
        let motorType = e.target.motorType.value;
        let motorTorque = e.target.motorTorque.value;


      
        const chargingDetails = {
            batteryCapacity,
            batteryType,
            chargingTime,
            fastCharging,
            drivingRange,
            motorType,
            motorTorque
        }

        axios.post(`http://localhost:8080/chargingDetails/addChargingDetails/${id}`, chargingDetails,
            {
                auth: {
                    username: user.email,
                    password: user.password
                }
            }
        ).then(response => {
            if (response.status >= 200 && response.status < 300) {
                alert("Charging Details added Successfully !!!");
                e.target.batteryCapacity.value = null;
                e.target.batteryType.value = null;
                e.target.chargingTime.value = null;
                e.target.fastCharging.value = null;
                e.target.drivingRange.value = null;
                e.target.motorType.value = null;
                e.target.motorTorque.value = null;

                setFlag(false);
                
                return;
            } else {
                console.log('Somthing went wrong...');
            }
        }).catch((error) => {alert(error.response.data.message)});



        

    }
    let HandleCreation1 = async (e) => {
        e.preventDefault();

        let airBags = e.target.airBags.value;
        let bootSpace = e.target.bootSpace.value
        let frontRearBrakes = e.target.frontRearBrakes.value
        let groundClearance = e.target.groundClearance.value;
        let seatingCapacity = e.target.seatingCapacity.value


       
        const vehicleFeatures = {
            airBags,
            bootSpace,
            groundClearance,
            frontRearBrakes,
            seatingCapacity
        }

        axios.post(`http://localhost:8080/vehicleFeatures/addVehicleFeatures/${id}`, vehicleFeatures,
            {
                auth: {
                    username: user.email,
                    password: user.password
                }
            }
        ).then(response => {
            if (response.status >= 200 && response.status < 300) {
                alert("Extra Features added Successfully !!!");
                alert("Vehicle Added Successfully !!!");
                e.target.airBags.value = null;
                e.target.bootSpace.value = null;
                e.target.groundClearance.value = null;
                e.target.frontRearBrakes.value = null;
                e.target.seatingCapacity.value = null;
                history.push("/Admin");
                

                return;
            } else {
                console.log('Somthing went wrong...');
            }
        }).catch((error) => {alert(error.response.data.message)});

        


        


    }
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Link to='/AddVehicle' style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
            {flag?
            <div >

                <form style={styles.box} type="submit" onSubmit={HandleCreation}>
                   
                    <Heading heading="Add Charging Details :-" subheading="Customized Info :"/>
                    <div style={styles.padding}>
                        <td> <InputInfo data1="Battery Capacity" data2="* Required Field" />
                            <input style={styles.input}
                                type="text"
                                name="batteryCapacity"
                                placeholder="Enter Battery Capacity" /></td><td></td>
                    </div>
                    <div style={styles.padding}>
                        <td><InputInfo data1="Battery Type" data2="* Required Field" />
                            <input style={styles.input}
                                type="text"
                                name="batteryType"
                                placeholder="Enter Battery Type" /></td><td></td>
                    </div>
                    <div style={styles.padding}>
                        <td><InputInfo data1="Charging Time" data2="* Required Field" />
                            <input style={styles.input}
                                name="chargingTime"
                                type="text"
                                placeholder="Enter Charging Time" /></td><td></td>
                    </div>
                    <div style={styles.padding}>
                        <td> <InputInfo data1="Driving Range" data2="* Required Field" />
                            <input style={styles.input}
                                type="text"
                                name="drivingRange"
                                placeholder="Enter Driving Range" /></td><td></td>
                    </div>
                    <div style={styles.padding}>
                        <td> <InputInfo data1="Fast Charging Available or Not" data2="* Required Field" />
                            <input style={styles.input}
                                type="text"
                                name="fastCharging"
                                placeholder="Fast Charging Available or Not" /></td><td></td>
                    </div>
                    <div style={styles.padding}>
                        <td> <InputInfo data1="Motor Type" data2="* Required Field" />
                            <input style={styles.input}
                                type="text"
                                name="motorType"
                                placeholder="Motor Type" /></td><td></td>
                    </div>
                    <div style={styles.padding}>
                        <td> <InputInfo data1="Motor Torque Available" data2="* Required Field" />
                            <input style={styles.input}
                                type="text"
                                name="motorTorque"
                                placeholder="Motor Torque Available" /></td><td></td>
                    </div>

                    <button style={styles.button}>Add Charging Details</button>

                </form></div>
            :
                
                <div>
                <div style={styles.arrowMark}><h3 style={{marginLeft:'10%'}}>Now Add some Extra Features &rarr;</h3></div>
                    <form style={styles.box} type="submit" onSubmit={HandleCreation1}>
                        <Heading heading="Add Extra Features :- " subheading="Customized Info :" />
                        <div style={styles.padding}>
                            <td> <InputInfo data1="Air Bags  Available" data2="* Required Field" />
                                <input style={styles.input}
                                    type="text"
                                    name="airBags"
                                    placeholder="Enter Air Bags " /></td><td></td>
                        </div>
                        <div style={styles.padding}>
                            <td> <InputInfo data1="Boot Space " data2="* Required Field" />
                                <input style={styles.input}
                                    type="text"
                                    name="bootSpace"
                                    placeholder="Enter Boot Space" /></td><td></td>
                        </div>
                        <div style={styles.padding}>
                            <td> <InputInfo data1="Front Rear Brakes" data2="* Required Field" />
                                <input style={styles.input}
                                    type="text"
                                    name="frontRearBrakes"
                                    placeholder="Enter Front Rear Brakes" /></td><td></td>
                        </div>
                        <div style={styles.padding}>
                            <td> <InputInfo data1="Ground Clearance" data2="* Required Field" />
                                <input style={styles.input}
                                    type="text"
                                    name="groundClearance"
                                    placeholder="Enter Ground Clearance" /></td><td></td>
                        </div>
                        <div style={styles.padding}>
                            <td> <InputInfo data1="Seating Capacity " data2="* Required Field" />
                                <input style={styles.input}
                                    type="text"
                                    name="seatingCapacity"
                                    placeholder="Enter Seating Capacity" /></td><td></td>
                        </div>
                        <button style={styles.button}>Add Features</button>
                    </form>
                </div>
                 }
            <br></br><br></br><br></br><br></br>
            <Footer />
        </>
    )
}
export default AddChargingDetailsAndFeatures