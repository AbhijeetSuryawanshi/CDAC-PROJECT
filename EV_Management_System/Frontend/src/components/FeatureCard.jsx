
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import { useState,useEffect } from 'react';

const styles2={
     textAlign:'start',fontFamily:'Montserrat'
}


export default function({featureList,titles})
{


    
     
     const [features,setFeatures]=useState([]);


     useEffect(()=>{
               setFeatures(featureList);
     })
     return(<>
     <Card sx={{ margin:'20px',border:'1px solid gray',backgroundColor:'lightBlue'}}>
      <CardContent>
        
        <Typography variant="h5" component="div" style={styles2} sx={{fontWeight:'500'}}>
          {titles}
        </Typography>
     

     
        <div style={{ width: '100vw' }}>
      <Box
        sx={{
          display: 'inline-flex',          
          p: 1,
          m: 1,
         
        }}
      >
        
          
           {
          
               features.map((el)=>{
                    return <><Typography sx={{marginRight:'20%'}}>{el}</Typography></>
               })
          } 
         
       </Box>        
        </div>
      </CardContent>
    
    </Card>
          
</>)
     

}

