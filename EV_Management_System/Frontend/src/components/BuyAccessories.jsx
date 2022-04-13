
import { Card} from "@mui/material"
import { useState, useEffect, useRef } from "react"
import Grid from '@mui/material/Grid';
import Button from '@material-ui/core/Button';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from "./Navbar";
import './arrow.css';
import { Footer } from "./Footer";


const styles = {
    content: {
        marginLeft: '3%',
        marginTop: '5%',
        
    },
    head: {
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '3%'
    },
    autodata: {
        textDecoration: 'none',
    },
    cards: {
        backgroundColor: '#D2CBFE',
        width: '500px',
        marginTop: '2%',
        height: '650px',
        marginLeft: '3%',
        textAlign: 'center',
        boxShadow: '0 50px 20px rgba(0,0,0,.12), 0 14px 8px rgba(0,0,0,.06)',
    },
    image: {
        width: '50%',
        height: '50%',
        padding: '20px',
    },
    accessories: {
        fontWeight: '550',
        marginLeft: '10%',
        marginBottom: '3%'

    },
    button: {
        marginLeft: '10%',
        marginBottom: '3%'
    }
}



const Line = styled.hr`
    width: 15px;
    height: 65px;
    background: #FF546D;
    margin-left: 2%;
    margin-bottom: -6%;
`
const breakPoints = [{ width: 1, itemsToShow: 1 }];

function BuyAccessories({}) {
    
    const [active, setActive] = useState();
    const [flag, setFlag] = useState(false);
    const totalAccessories=[
        {
            id:1,
            name:"Portable Charger",
            imagePath:"/accessoriesImages/portableCharger.jpg",
            price:2000,
            information:"Not all new cars have a Type 2 portable charger as standard."
        },
        {   
            id:2,
            name:"Emergency Cable",
            imagePath:"/accessoriesImages/emergencyCable.jpg",
            price:1000,
            information:"Often you will find Type 1 or Type 2 plugs at the charging station, public charging stations without a cable and just sockets where you can plug in your cable."
        },
        {   
            id:3,
            name:"Adaptor", 
            imagePath:"/accessoriesImages/adaptor.jpg",
            price:1000,
            information:"EVs have different plugs, which can sometimes lead to misunderstandings, depending on the car."
        }
       

    ]
    const arr=useRef([]);
    const i=useRef(0);
    const filteredAccessories=useRef([]);
    const setEId=(aid)=>{
    let count=0;
    if(i.current==3)
    {
        alert("You have already selected all the accessories.");
    }
    if(i.current<3){
        for(let j=0;j<3;j++)
          {
              if(arr.current[j]==aid)
              {
                  alert("You have already selected this accessory. Please select another accessory.");
                  count++;
                  break;
              }
          }
    if(count!=1){
    arr.current[i.current]=aid; 
    filteredAccessories.current[i.current]=totalAccessories.find((element)=>element.id==aid);
    i.current=i.current+1;
    
    }
    }
    
    

    }
    useEffect(()=>{
        if(i.current==1){
            setFlag(true);
        }
        

    })
   
    
  
    
    return (
        <>
         <Navbar/>
        
            <div style={styles.content}>
                <Line />
                <h1 style={styles.head}>Choose Accessories To Buy -</h1>
                <Grid container direction='row' justify='center' alignItems='center' >
                    <Carousel breakPoints={breakPoints} >
                        {totalAccessories.map((e, index) => {
                             
                            return (
                                <div key={index} >
                                    <Grid container>
                                         
                                            <Card style={styles.cards}>
                                                <img style={styles.image} src={e.imagePath}  />
                                                <h3>{e.name}</h3>
                                                <h3>Rs. {e.price}</h3>
                                                <h3>{e.information}</h3>
                                                <Button variant="contained" color={active === index ? "primary" : "secondary"} onClick={() =>{ setActive(index);
                                                setEId(e.id)}}>Add to Cart</Button><br></br>
                                               
                                            </Card>
                                            
                                        
                                    </Grid>
                                </div>
                            )
                        })}
                    </Carousel>
                </Grid>
                
            </div>
            <div>
                 <Line />
                 <h1 style={styles.head}>Selected Accessories To Buy -</h1>
                {filteredAccessories.current.map((e,index)=>{
                   return(
                       <h2 style={styles.accessories}>{index+1} : {e.name}</h2>
                   ) 
                })}
                  {flag ? <Link to={`/BookAccessories/${arr.current}`} style={{textDecoration:'none'}}><Button variant="contained" color="primary" style={styles.button}>Buy Now</Button></Link> : null}  
                 
                </div>
        <Footer/>
           
        </>
    ) 
}

export default  BuyAccessories