
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';



const styles2={
     textAlign:'start',width:'100%',fontFamily:'Arial'
}
export default function ({title,about})
{
     return(<>

<Card sx={{ minWidth: 275,margin:'10px',border:'1px solid gray',backgroundColor:'lightBlue' }}>
      <CardContent>
        
        <Typography variant="h5" component="div" style={styles2} sx={{fontWeight:'500'}}>
          {title}
        </Typography>
     
        <Typography variant="body4" style={styles2} sx={{fontWeight:'400'}}>
          
        <br />
        {about}
        </Typography>
      </CardContent>
    
    </Card>
          

     </>)
}