import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import styled  from 'styled-components';
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from "react"
import { VehicleList } from './VehicleLists';
import { RiCloseCircleLine } from 'react-icons/ri'
import { NavLink } from "react-router-dom";
import axios from 'axios';

const Search = styled.div`
  background-color: #FFB3D4;
  width: 37%;
  height: 38px;
  border-radius: 30px;
  display: flex;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
`

const SearchWrapper = styled.button`
  background-color: white;
 width: 15%;
 height: 32px;
 border-radius: 20px;
 margin-top: 2.8px;
 margin-left: 2%;
 border: none;
`


const StyledInputBase = styled(InputBase)(() => ({
    backgroundColor: "#FFB3D4",
    width: '80%',
    height: '9%',
    borderRadius: "42px",
    padding: "0.2%",
    paddingLeft: "2%",
    marginTop: '20px',
    marginLeft: '10px',
    input:{
    '&::placeholder': {
      color: 'black',
      fontSize: '15px',
      fontWeight: '500',
    }
  }
}));

const useStyles = makeStyles({
  icon:{
    color:'#FF546D', 
    fontSize:'50px', 
    marginLeft: '10%',
    marginTop: '8%',
    cursor: 'pointer',
  },
  
})

const styles ={
    appbar: {
        position: 'relative',
    },
  //   text:{
  //   textAlign: 'center',
  //   margin: '2%'
  // },
  close:{
    fontSize:'30px',
    color: 'black',
    textAlign: 'right',
    marginRight: '1%'
  },
  image : {
    zIndex: '-10',
     position: 'absolute',
     top:0, 
     marginTop: '150px',
     width: '40px',
     marginLeft: '400px',
   }
}



function SearchResults(){
    const [input, setInput] = useState('')
    
    const [vehicleList, setVehicleList] = useState([])
    const classes = useStyles()

    useEffect(() => {
     
      getVehicles()
  }, [])
  
    const handleChange = (e)=>{
      setInput(e.target.value)
    }

   

    const getVehicles = async() => {
      axios.get('http://localhost:8080/vehicles')
      .then((res)=>{
        let vehiclesData = res.data;
        setVehicleList(vehiclesData)
    }).catch(err=>err)
    }

   
    return(
        <>
        <AppBar style={styles.appbar}>
          <NavLink to='/' style={styles.close}>
        <RiCloseCircleLine />
        </NavLink>
            <Search>
            <StyledInputBase
              placeholder="SEARCH VEHICLES"
              value={input}
              onChange={handleChange}
            />
            <SearchWrapper>
              <SearchIcon className={classes.icon}/>
              </SearchWrapper>
          </Search>
          </AppBar>
          
          {/* <Typography variant='h4' style={styles.text}>
              Find your results here!
          </Typography>
           */}
         
          <VehicleList vehicleList={vehicleList} input={input}></VehicleList>
          <div style={styles.image}>
           <img src="/otherImages/vehiclenew.jpg" alt="not fount"/>
        </div>
        </>
    )
}

export {SearchResults}