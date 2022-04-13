import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { useHistory } from 'react-router-dom';
import Heading from "./HeadingInfo";




const styles = {

    head: {
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '3%',
        fontFamily: 'Times New Roman',
        textDecoration: 'underline'
    },
    payment: {
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '3%',
        fontFamily: 'Times New Roman',
        fontSize: '20px'

    },
    card: {
        backgroundColor: '#F0F0F0',
        width: '370px',
        marginTop: '8%',
        height: '200px',
        marginLeft: '35%',
        textAlign: 'left',

    },
    subhead: {
        fontWeight: '600',
        marginLeft: '5%',
        marginBottom: '3%',
        fontFamily: 'Times New Roman',
    },
    button: {
        backgroundColor: '#ffca28',
        border: 'none',
        color: 'black',
        padding: '10px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: '600',
        fontFamily: 'Times New Roman',
        marginLeft: '35%',
        cursor: 'pointer',
        borderRadius: '8px',
    },
    box:{
        width:400,
        height:300,
        marginLeft:"35%",
        marginTop:"10%"
    },
    input:{
        width:"343px",
        height:"40px",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        color: "black",
        
    },
    padding:{
        marginBottom:15
    },
    image: {
        zIndex: -10,
        position: "absolute", 
        top:0,
        marginTop: "50px",
        marginLeft: "450px",      }
}
function PaymentSection() {
    let { arr } = useParams();
    let { tPrice } = useParams();
    const search = useLocation().search;
    let shippingAddress = new URLSearchParams(search).get('shippingAddress');
    let firstName=new URLSearchParams(search).get('firstName');
    let lastName =new URLSearchParams(search).get('lastName');
    const [payment, setPayment] = useState();
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const history = useHistory();
    const handleChange = (event) => {
        setPayment(event.target.value);
       
    };
    useEffect(() => {
        if(payment!=null)
        {
        setFlag1(true);
        if (payment === "Pay on Delivery" || payment==null) {
            setFlag2(false);
        }
        else {
            
            setFlag2(true);
            
        }
        }
        

    }, [payment]);
    useEffect(()=>{
        console.log(flag1,flag2);
        
    },[flag1]);
    useEffect(()=>{
        console.log(flag1,flag2);
    },[flag2]);

    return (
        <div style={{height:'140vh'}}>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Link to={`/BookAccessories/${arr}`} style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
           
            <h1 style={styles.head}>Select a payment method :-</h1>
            <div style={styles.payment} onChange={handleChange}>
                <input type="radio" value="Credit/Debit/ATM Card" name="payment" checked={payment === "Credit/Debit/ATM Card"} /> Credit/Debit/ATM Card <br></br><br></br>
                <input type="radio" value="Pay on Delivery" name="payment" checked={payment === "Pay on Delivery"} /> Pay on Delivery

            </div>
            {flag2?
            <form style={styles.box} >
                        <Heading heading="Payment Information" subheading = "Credit Card" />
                        <div style={styles.padding}>
                           
                            <input style={styles.input}
                                type="text"
                                name="name"
                                placeholder = "Cardholder's Name" 
                            />
                        </div>
                        <div style={styles.padding}>
                            
                            <input style={styles.input}
                                type="text"
                                name="cardNo"
                                placeholder = "Card Number" 
                            />
                        </div>
                        <div style={styles.padding}>
                       
                            <input style={styles.input}
                                type="text"
                                name="expiryDate"
                                placeholder = "Expiry Date (YY/MM)" 
                            />
                        </div>
                        <div style={styles.padding}>
                       
                            <input style={styles.input}
                                type="text"
                                name="CVV"
                                placeholder = "CVV" 
                             />
                        </div>

                        
                    </form>
            :null}

            {flag1?
                <div>


                    <Card style={styles.card}>

                        <h3 style={styles.subhead}>Order Total&nbsp;:&nbsp;Rs.&nbsp;{tPrice}</h3>

                        <h3 style={styles.subhead}>Deliver To :</h3>
                        <div style={styles.subhead}>
                            {firstName}&nbsp;{lastName}<br></br>
                            {shippingAddress}<br></br>
                        </div>
                        <h3 style={styles.subhead}>Delivery in 6-8 days</h3>

                    </Card><br></br><br></br>
                
                    
                    <button style={styles.button} onClick={() => { alert("Your Order Placed Successfully..."); history.push("/"); }}>Place your Order</button>
                    <br></br>
                    <br></br>
                    <br></br>


                </div>
                : null}

<div style={styles.image}>
          <img src="https://media.istockphoto.com/vectors/people-are-writing-documents-to-send-and-women-reading-emails-with-vector-id1160185478?k=20&m=1160185478&s=170667a&w=0&h=z6Q9Q9f_dyy0L9bPgSToDPHuM6p_2ThYMcVoHiVCrgY=" alt="not fount"/>
       </div>
          

       </div>
    );
}

export default PaymentSection