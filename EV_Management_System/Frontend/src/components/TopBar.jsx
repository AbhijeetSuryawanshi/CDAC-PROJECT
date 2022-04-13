import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Searchbar } from './Searchbar';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Responsibility } from "./Responsibility";
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles({
    bar1: {
        marginTop: "1.5%",
        color: "background: linear-gradient(180deg, #FF3D59 0.3%, #C11561 100%)",

        '& h5': {
            marginLeft: '10%',
            marginRight: "45%",
            fontFamily: "Calibry",
            fontWeight: "600",
            color:"black"
        },
    },
    bar2: {
        marginLeft: '19%',
        color: "background: linear-gradient(180deg, #FF3D59 0.3%, #C11561 100%)",

        
    },
})

const styles = {
    appbar: {
        height: '500px',
        position: 'relative',
    },
    btn1: {
        backgroundColor: "#2AE267",
        borderRadius: "51px",
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
        fontWeight: '700',
        fontSize: '15px',
        marginTop: '0.5%',
        color:'black'
    },
    btn2: {
        backgroundColor: "#32CAF9",
        borderRadius: "51px",
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
        fontWeight: '700',
        fontSize: '15px',
        marginTop: '0.5%',
        color:'black'
    },
    btn3: {
        backgroundColor: "#0FB493",
        borderRadius: "51px",
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
        fontWeight: '700',
        fontSize: '15px',
        marginTop: '0.5%',
        color:'black'
    },
    btn4: {
        backgroundColor: "#F9D132",
        borderRadius: "51px",
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
        fontWeight: '700',
        fontSize: '15px',
        marginTop: '0.5%',
        color:'black'
    },
    btnlink: {
        textDecoration: 'none',
        marginLeft: '2%',
    },
    logout:{
        textDecoration: 'none',
        color: 'white',
        fontWeight: '400',
        marginLeft: '-10%'
    },
    welcome: {
        marginLeft: '2%',
        display: 'flex',
        flexDirection: 'column'
    }
}

const NavUnlisted = styled.ul`

  display: flex;
  

  a {
    text-decoration: none;
  }

  li {
    color: black;
    margin: 0 0.7rem;
    font-size: 22px;
    position: relative;
    list-style: none;
    font-weight: 600;
    font-family: 'Times New Roman';
    width: max-content
  }
  .current {
    li {
      font-weight: 800;
      border-bottom: 3px solid white;
    }
  }
`

function TopBar() {
    const classes = useStyles()
    const history = useHistory();

    let userDetails=null;
    let adminPresent=false;
    function isUserPresent()
    {
        let user=localStorage.getItem('activeUser');
        
        if(!user)
            return false;
        else
        {
            userDetails=JSON.parse(user);
            if(userDetails.role=="ADMIN"){
                adminPresent=true;
            }

            return true;    
        
            
        }
    }

    function logout()
    {
        localStorage.removeItem('activeUser');
        history.push("/");
        
    }

    return (
        <>
            <AppBar style={styles.appbar}>
                <Toolbar className={classes.bar1} >
                    <Typography variant="h5">
                        Your E-Assistant
                    </Typography>
                    <NavUnlisted>
                        <NavLink to="/Home">
                            <li>Home</li>
                        </NavLink>
                       
                       
                        <NavLink to="/About">
                            <li>About Us</li>
                        </NavLink>
                        {isUserPresent()===true? <NavLink to="/Login">
                            <li style={styles.welcome}>Hello! {userDetails.firstName} &nbsp; <Button variant="outlined" style={styles.logout} onClick={logout}>(Logout)</Button> </li>                            

                        </NavLink> :<NavLink to="/Login">
                            <li>Login</li>
                        </NavLink>}
                    </NavUnlisted>
                   

                </Toolbar>
                <Toolbar className={classes.bar2}>
                {isUserPresent()===true?<NavLink to="/CompareVehicles" style={styles.btnlink}> <Button variant="outlined" style={styles.btn1} >Compare Vehicles</Button></NavLink>
                    :null}
                    
                    {isUserPresent()===true?<NavLink to="/BuyAccessories" style={styles.btnlink}> <Button variant="outlined" style={styles.btn2} >Buy Accessories</Button></NavLink>
                    :null}
                     {isUserPresent()===true?<NavLink to="/ChargingCities" style={styles.btnlink}> <Button variant="outlined" style={styles.btn3} >Charging Stations Nearby You!</Button></NavLink>
                    :null}
                    {adminPresent?<NavLink to="/Admin" style={styles.btnlink}> <Button variant="outlined" style={styles.btn4} >Manage Vehicles</Button></NavLink>
                    :null}
                    
                </Toolbar>
                {isUserPresent()===true? <Searchbar />:null}
              <Responsibility />  
            </AppBar>
            
        </>
    )
}

export { TopBar }