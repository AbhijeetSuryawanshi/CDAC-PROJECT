import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from './Footer';
import axios from 'axios';
import {Button} from '@mui/material';




const styles = {
    box: {
        width: 350,
        marginLeft: "7%",
        marginTop: "10"
    },

    btn1: {
        backgroundColor: "#88FB7C",
        borderRadius: "51px",
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
        fontWeight: '700',
        fontSize: '15px',
        marginTop: '3%',
        color:'black',
        borderColor:'black',
        
    },


    btnlink: {
        textDecoration: 'none',
        marginLeft: '8%',
    },
    image: {
        zIndex: -10,
        position: "absolute", 
        top:0,
        marginTop: "310px",
        marginLeft: "600px", 
        width:"350px"     
    }

}
const styled = {
    content: {
        marginLeft: '3%',
        marginTop: '5%'
    },

    vehicle: {
        marginLeft: '5%',
        marginTop: '10%'
    },

}
const button = {
    button1: {
        cursor: "Pointer",
        width: "200px",
        height: "40px",
        fontFamily: "Poppins",
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 530,
        marginBottom: 5,
        marginTop: 22,
        color: "white",
        border: "none",
        outline: "none",
        backgroundColor: "#1E841A",
        cursor: "pointer"
    },
    button2: {
        cursor: "Pointer",
        width: "200px",
        height: "40px",
        fontFamily: "Poppins",
        fontSize: 10,
        fontStyle: "oblique",
        fontWeight: 530,
        marginBottom: 5,
        marginTop: 22,
        color: "black",
        border: "none",
        outline: "none",
        backgroundColor: "#5CC34C"
    },
    button3: {
        cursor: "Pointer",
        width: "250px",
        height: "40px",
        fontFamily: "Poppins",
        fontSize: 10,
        fontStyle: "oblique",
        fontWeight: 530,
        marginBottom: 5,
        marginTop: 22,
        color: "black",
        border: "none",
        outline: "none",
        backgroundColor: "#8EEC80"
    },
}

const Admin = () => {

    const [adminVehicle, setAdminVehicle] = useState([]);
    const [reuse, setReuse] = useState([]);
    const [reused, setReused] = useState([]);
    let user = JSON.parse(localStorage.getItem('activeUser'));

    useEffect(() => {
        getAdminVehicle();
    }, [])
    const getAdminVehicle = async () => {

        axios.get('http://localhost:8080/vehicles')
            .then((res) => {
                console.log(res.data);
                setAdminVehicle(res.data);
            }).catch(err => err)
    }
    let HandleSubmit = async (id) => {

        axios.delete(`http://localhost:8080/vehicles/deleteVehicle/${id}`,
            {
                auth: {
                    username: user.email,
                    password: user.password
                }
            }
        ).then(response => {
            if (response.status >= 200 && response.status < 300) {

                setReuse("Vehicle Deleted Successfully... Vehicle Name: ");
                getAdminVehicle();
                return;
            } else {
                console.log('Somthing went wrong...');
            }
        }).catch(err => err);
    }



    return (

        <>
            <Navbar />
            <NavLink to="/AddVehicle" style={styles.btnlink}> <Button variant="outlined" style={styles.btn1} >Add New Vehicle</Button></NavLink>
            <div style={styles.box}>
                <div style={styled.content}>


                    <h2 style={styled.vehicle}>All Vehicles :-</h2>
                    <h3>{reuse}{reused}</h3>
                    {
                        adminVehicle.map((data, index) => {
                            if (data) {

                                return (
                                    <div key={index}>
                                        <form>
                                            <td>
                                                <button style={button.button1} disabled="true"><h2>{data.vehicleName}</h2></button>
                                            </td>
                                            <td>
                                                <button style={button.button2} disabled="true"><h2>{data.vehiclePrice}</h2></button>
                                            </td>
                                            <td>
                                                <button style={button.button3} disabled="true"  ><h2>{data.location}</h2></button>
                                            </td>


                                        </form>

                                        <td><Button variant="contained" sx={{ backgroundColor: '#dd2c00' }} onClick={() => { { HandleSubmit(data.id) }; setReused(data.vehicleName); }}>Delete</Button><br></br></td>
                                    </div>
                                )
                            }
                            return null;
                        })}




                </div>
                <div style={styles.image}>
                    <img src="https://i0.wp.com/evcentral.com.au/wp-content/uploads/2020/11/Audi-e-Tron-drivetrain-including-electric-motor-and-transmission-1024x564.jpg?resize=800%2C441" alt="not fount" />
                </div></div>
                <Footer />

        </>
    )
}
export default Admin;