import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import styled  from 'styled-components';



const VehicleSec = styled.div`
   margin-left: 4%;
   margin-bottom: 3%;
`

const styles = {
    Vehicles:{
       marginLeft: '2%',
        marginTop: '5%'
    },
    Vehicletext: {
        color:'black',
        textDecoration: 'none',
        
    },
    cards: {
        backgroundColor: '#6FD2F6', 
        width: '20%', 
        marginTop: '1.5%',
        padding: '20px'
    }
}
const VehicleList = ({vehicleList, input}) => {

    return (
      <>
      <VehicleSec>
        <h2 style={styles.Vehicles}>All Vehicles :-</h2>
      { vehicleList.filter((e)=>{
          if(input === ''){
              return e.vehicleName
          }else if(e.vehicleName.toLowerCase().includes(input.toLowerCase())){
                return e.vehicleName  
          }
      }).map((data,index) => {
          if (data) {
            return (
              <div key={index}>
                  <Card style={styles.cards}>
               <NavLink to={`/Vehicles/${data.id}`} style={styles.Vehicletext}> <h3>{data.vehicleName}</h3></NavLink>
               </Card>
          </div>	
             )	
           }
           return null;
      }) }
      </VehicleSec>
      </>
    );
  }
  
  export {VehicleList}