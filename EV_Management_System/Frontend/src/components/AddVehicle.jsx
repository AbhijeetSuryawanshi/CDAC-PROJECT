import {useState, useEffect, useRef} from "react";
import {useHistory} from 'react-router-dom';
import { Footer } from "./Footer";
import Heading from "./HeadingInfo";
import { InputInfo } from "./InputInfo";
import { Link } from "react-router-dom";
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const styles = {
        
    box:{
   width:350,
   height:500,
   marginLeft:"7%",
},
input:{
   width:"500px",
   height:"40px",
   fontFamily: "Arial",
   fontSize: "16px",
   fontStyle: "normal",
   fontWeight: 500,
   color: "red",
   
},
padding:{
   marginBottom:15
},
button:{
   cursor:"Pointer",
   width:"510px",
   height:"40px",
   fontFamily: "Poppins",
   fontSize: 17,
   fontStyle: "normal",
   fontWeight: 530,
   marginBottom:5,
   marginTop:22,
   color:"white",
   border:"none",
   outline:"none",
   backgroundColor:"#7575FE"
},
image: {
    zIndex: -10,
    position: "absolute", 
    top:0,
    marginTop: "180px",
    marginLeft: "650px", 
    width:"350px"     
}
}

const AddVehicle=()=>{
    const history = useHistory();
    const [store,setStore]=useState([]);
    let user=JSON.parse(localStorage.getItem('activeUser'));

   

let HandleCreation = async (e) =>{
    e.preventDefault();
    
   
    let vehicleName = e.target.vehicleName.value;
    let vehicleInfo = e.target.vehicleInfo.value
    let vehiclePrice = e.target.vehiclePrice.value
    let location = e.target.location.value;
    
    
    // if( vehicleName=== null){
    //     alert("password must include alphabets and digits both")
    //     return
    // }
    // if( vehiclePrice=== null){
    //     alert("password must include alphabets and digits both")
    //     return
    // }
    // if( vehicleInfo=== null){
    //     alert("password must include alphabets and digits both")
    //     return
    // }
    // if( location=== null){
    //     alert("password must include alphabets and digits both")
    //     return
    // }
    const vehicle = {
        vehicleName,
        vehicleInfo,
        vehiclePrice,
        location,
    }
    
    
    axios.post('http://localhost:8080/vehicles/addVehicle',vehicle,
    {
        auth: {
             username: user.email,
             password: user.password
        }
   }
    ).then(response =>{
        
        if (response.status >= 200 && response.status < 300) {
           
            alert("Vehicle details added Successfully !!!");
            e.target.vehicleName.value = null;
            e.target.vehicleInfo.value = null;
            e.target. vehiclePrice.value = null;
            e.target.location.value = null;
            let vehicleId=response.data.id;
            
            history.push(`/AddChargingDetailsAndFeatures/${vehicleId}`);

            
            return ;
        } else {
           console.log("Somthing went wrong...");
        }
        }).catch((error) => {alert(error.response.data.message)});

        
}
    
    return(
        <>
        <div>
        <AppBar position="static" >
            <Toolbar variant="dense" >
                <Link to='/Admin' style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
            <form style={styles.box} type="submit" onSubmit = {HandleCreation}>
                <Heading heading="Add New Vehicle :- " subheading = "Basic Information :"/>
                <div style={styles.padding}>
                   <td> <InputInfo data1 = "Vehicle  Name" data2="* Required Field"/>
                    <input style={styles.input} 
                        type="text" 
                        name="vehicleName"
                        placeholder = "Enter Vehicle Name" /></td><td></td>
                </div>
                <div style={styles.padding}>
                    <td><InputInfo data1 = "Vehicle Information" data2="* Required Field"/>
                    <input style={styles.input} 
                        type="text" 
                        name = "vehicleInfo"
                        placeholder = "Enter Vehicle Info"/></td><td></td>
                </div>
                <div style={styles.padding}>
                    <td><InputInfo data1 = "Price" data2="* Required Field"/>
                    <input style={styles.input} 
                        name = "vehiclePrice"
                        type="text" 
                        placeholder = "Enter Price"/></td><td></td>
                </div>
                <div style={styles.padding}>
                <td> <InputInfo data1 = "Location" data2="* Required Field"/>
                        <input style={styles.input} 
                        type="text" 
                        name = "location"
                        placeholder = "Enter Location"/></td><td></td>
                    </div>
                <button style = {styles.button }>Add Details</button>
           
        </form></div>
        <div style={styles.image} >
           <img src="https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/08/benefits-of-buyng-an-EV.jpg?resize=696%2C349&ssl=1" alt="not fount"/>
        </div>
        <Footer/>
        </>
    )
 }

export default AddVehicle