import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { Cable,Timer,AddRoadSharp,BatteryStd,PowerSettingsNew, BatteryFull,ElectricCar, CloudUpload, Work, NewReleases, AirportShuttle, Group} from '@mui/icons-material';



const styles1={
     textAlign:'center',fontFamily:'Arial'
}
const styles2={
     textAlign:'center',width:'100%',fontFamily:'Times New Roman'
}

export  default function({icon,feature,text})
{

     let ic;
     if(icon=="timer")
     {    
          ic=<Timer/>;
     }
     else if(icon=="road")
     {
          ic= <AddRoadSharp/>
     }
     else if(icon=="battery")
     {
          ic =<BatteryStd/>
     }
     else if (icon=="power")
     {
          ic= <PowerSettingsNew/>
     }
     else if(icon=="cable")
     {
          ic= <Cable/>
     }
     else if(icon=="batteryFull")
     {
          ic= <BatteryFull/>
     }
     else if(icon=="electricCar")
     {
          ic= <ElectricCar/>
     }
     else if(icon=="cloudUpload")
     {
          ic= <CloudUpload/>
     }
     else if(icon=="work")
     {
          ic= <Work/>
     }
     else if(icon=="newReleases")
     {
          ic= <NewReleases/>
     }
     else if(icon=="airportShuttle")
     {
          ic= <AirportShuttle/>
     }
     else if(icon=="group")
     {
          ic= <Group/>
     }

     return(<>
          <Box sx={{display:'inline-flex',direction:'row',gap:0}}>               

                    {ic}
                    <Box style={{flexGrow:0}}>                                   
                         <Typography style={styles1} variant="body2" sx={{fontWeight:'500',fontSize:'17px',minWidth:'150px'}}>{feature}</Typography>
                         <Typography style={styles2} sx={{fontWeight:'600',fontSize:'20px'}}> {text}</Typography>
                    </Box>     
          </Box>
          </>);
}