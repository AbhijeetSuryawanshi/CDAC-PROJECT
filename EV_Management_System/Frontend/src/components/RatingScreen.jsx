import { Stack, Typography, Button, Rating } from "@mui/material";
import { Box, spacing } from "@mui/system";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { useMemo, useState } from "react";
import {useHistory} from 'react-router-dom';



import axios from "axios";

import {useParams} from 'react-router-dom';

function MyFormHelperText() {
     const { focused } = useFormControl() || {};
   
     const helperText = useMemo(() => {
       if (focused) {
         return 'please enter your review';
       }
   
       return 'please enter your review';
     }, [focused]);
   
     return <FormHelperText>{helperText}</FormHelperText>;
}



let initData = {
  name:"",
  comment:"",
  rating:null
}
export default function({})
{

    let {id}=  useParams();
    let id2 = parseInt(id); 
     const [review,setReview]=useState(initData);
     const [rating,setRating]=useState(null);
     let userDetails = localStorage.getItem('activeUser');
     let user = JSON.parse(userDetails);
     let firstName = user.firstName;
     let lastName = user.lastName;
     let fullName= firstName+" "+lastName;

    
     const history = useHistory();
     let handleChange=(e)=>{
        let rev = {...review,[e.target.name]:e.target.value,["name"]:fullName};
        
        
        setReview(rev);
     }


     let handleSubmit = async (e)=>{
       
        
        let data = {...review,["rating"]:rating};
       
      
        let user=JSON.parse(localStorage.getItem('activeUser'));
        
      

        axios.post(`http://localhost:8080/reviews/${id}`,data,{
          auth: {
            username:user.email,
            password:user.password
          }
        }).then((res)=>{
          alert(res.data);
          history.push("/");
          
        }).catch((error) => {alert(error.response.data.message)});
        
    
      


     }



     return(<>

     
     <Box sx={{padding:0,spacing:3}}>

          <Stack direction="column" spacing={5}>
          <FormControl sx={{ width: '100%' }} >
          <Typography>Name</Typography>               
          <OutlinedInput value={fullName} readOnly name="name"/>
          
          </FormControl>

          

          <FormControl sx={{ width: '100%' }} >
          <Typography>Comments</Typography>               
          <OutlinedInput placeholder="Please enter text" style={{height:'5rem',textAlign:'start',cursor:'pointer'}}  onChange={handleChange} name="comment" required="true"/>
          <MyFormHelperText />
          </FormControl>


          <div style={{textAlign:'center'}}>

              {
                   <Rating precision={0.5} onChange={(event, newValue) => {
                    setRating(newValue);
                  }} name="size-large" defaultValue={rating} size="large" style={{fontSize:'64px',margin:'20px',color:'yellow',opacity: 0.65 }} />
              } 
               
               <br/>
               <Button color="primary" variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
          </Stack>




          

     </Box>          

              

     </>)
}