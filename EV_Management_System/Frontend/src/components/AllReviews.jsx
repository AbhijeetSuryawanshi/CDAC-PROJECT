import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Review from './Review';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { responsiveFontSizes } from '@material-ui/core';
const styles = {
     textAlign: 'center', width: '100%', fontFamily: 'Rozha One', fontSize: '37px'
};
const styles1 = {
     textAlign: 'center', width: '100%', fontFamily: 'Rozha One', fontSize: '30px'
};
export default function () {

     const [reviews, setReviews] = useState([]);

     let user = JSON.parse(localStorage.getItem('activeUser'));
     const { id } = useParams();


     useEffect(async () => {
          axios.get(`http://localhost:8080/reviews/${id}`,
               {
                    auth: {
                         username: user.email,
                         password: user.password
                    }
               }).then((res) => {
                    setReviews(res.data);


               })

     }, []);


     return (<>
          <AppBar position="static" >
               <Toolbar variant="dense" >
                    <Link to={`/vehicles/${id}`} style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                         <ArrowBackIosNewIcon />
                    </IconButton>
                    </Link>


                    <Typography variant="h1" color="inherit" component="div" style={styles}>
                         Your E-Assistant
                    </Typography>
               </Toolbar>
          </AppBar>

          <Box sx={{ padding: 2 }}>
               <Typography variant="h1" sx={{ textDecoration: 'underline', textDecorationColor: '#FF3D5A' }}
                    color="black" component="div" style={styles}>
                    Reviews
               </Typography>
               <br></br>
               <br></br>

               {
                    reviews.map((el) => {
                         return <Review name={el.name} date={el.createdAt} rating={el.rating} comment={el.comment} />
                    })
               }

          </Box>

          <Footer />

     </>);
}